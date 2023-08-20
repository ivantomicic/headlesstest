import { useQuery, gql } from "@apollo/client";
import { BlogInfoFragment } from "../fragments/GeneralSettings";

export default function Component() {
	const { data } = useQuery(Component.query);

	const { title: siteTitle, description: siteDescription } =
		data?.generalSettings;

	return (
		<>
			<h1>{siteTitle} - Front Page</h1>
			<div className="text-center">
				<p>{siteTitle}</p>
				<p>
					This page is utilizing the "front-page" WordPress template.
				</p>
				<code>wp-templates/front-page.js</code>
			</div>
		</>
	);
}

Component.query = gql`
	${BlogInfoFragment}
	query GetPageData {
		generalSettings {
			...BlogInfoFragment
		}
	}
`;
