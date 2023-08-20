import { gql } from "@apollo/client";
import { BlogInfoFragment } from "../fragments/GeneralSettings";

export default function Component(props) {
	// Loading state for previews
	if (props.loading) {
		return <>Loading...</>;
	}

	const { title: siteTitle, description: siteDescription } =
		props?.data?.generalSettings;
	const { title, content } = props?.data?.page ?? {
		title: "",
	};

	return (
		<>
			<h1>
				{title} - {siteTitle}
			</h1>
			{content}
		</>
	);
}

Component.variables = ({ databaseId }, ctx) => {
	return {
		databaseId,
		asPreview: ctx?.asPreview,
	};
};

Component.query = gql`
	${BlogInfoFragment}
	query GetPageData($databaseId: ID!, $asPreview: Boolean = false) {
		page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
			title
			content
		}
		generalSettings {
			...BlogInfoFragment
		}
	}
`;
