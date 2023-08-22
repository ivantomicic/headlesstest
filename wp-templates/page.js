import { gql } from "@apollo/client";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import blocks from "../wp-blocks";
import flatListToHierarchical from "../utils/flatListToHierarchical";
import getFragmentDataFromBlocks from "../utils/getFragmentDataFromBlocks";

export default function Component(props) {
	// Loading state for previews
	if (props.loading) {
		return <>Loading...</>;
	}

	const { title: siteTitle, description: siteDescription } =
		props?.data?.generalSettings;
	const { title, content, editorBlocks } = props?.data?.page ?? {
		title: "",
	};

	console.log("editorBlocks");
	console.log(editorBlocks);

	const blocks = flatListToHierarchical(editorBlocks);

	console.log("blocks");
	console.log(blocks);

	return <WordPressBlocksViewer blocks={blocks} />;
}

Component.variables = ({ databaseId }, ctx) => {
	return {
		databaseId,
		asPreview: ctx?.asPreview,
	};
};

Component.query = gql`
	${BlogInfoFragment}

	# Get all block fragments and add them to the query
	${getFragmentDataFromBlocks(blocks).entries}

	query GetPageData($databaseId: ID!, $asPreview: Boolean = false) {
		page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
			title
			content
			editorBlocks {
				name
				id: clientId
				parentId: parentClientId
				renderedHtml

				# Get all block fragment keys and call them in the query
				${getFragmentDataFromBlocks(blocks).keys}
			}
		}
		generalSettings {
			...BlogInfoFragment
		}
	}
`;
