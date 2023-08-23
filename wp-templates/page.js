import { gql } from "@apollo/client";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import blocks from "../wp-blocks";
import { Header, Footer } from "../components";
import flatListToHierarchical from "../utils/flatListToHierarchical";
import getFragmentDataFromBlocks from "../utils/getFragmentDataFromBlocks";

export default function Page(props) {
	// Loading state for previews
	if (props.loading) {
		return <>Loading...</>;
	}

	const { title: siteTitle, description: siteDescription } =
		props?.data?.generalSettings;
	const { title, content, editorBlocks } = props?.data?.page ?? {
		title: "",
	};

	console.log("bleja");
	console.log(editorBlocks);

	const blocks = flatListToHierarchical(editorBlocks);

	const menuItems =
		props?.data?.drivenThemeSettings?.themeSettings?.mainNavigation;

	return (
		<>
			<Header menuItems={menuItems} />
			<WordPressBlocksViewer blocks={blocks} />
			<Footer props={props.data.drivenThemeSettings.themeSettings} />
		</>
	);
}

Page.variables = ({ databaseId }, ctx) => {
	return {
		databaseId,
		asPreview: ctx?.asPreview,
	};
};

Page.query = gql`
	${BlogInfoFragment}
	${Header.fragments.entry}
	${Footer.fragments.entry}

	# Get all block fragments and add them to the query
	${getFragmentDataFromBlocks(blocks).entries}

	query GetPageData($databaseId: ID!, $asPreview: Boolean = false) {
		page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
			title
			content
			editorBlocks {
				id: clientId
				parentId: parentClientId
				# Get all block fragment keys and call them in the query
				${getFragmentDataFromBlocks(blocks).keys}
			}
		}
		generalSettings {
			...BlogInfoFragment
		}
		drivenThemeSettings {
			...HeaderFragment
			...FooterFragment
		}
	}
`;
