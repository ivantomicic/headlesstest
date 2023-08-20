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
				<a href="#" className="btn">
					Click me
				</a>
				{/* map thru data.pages */}
				<ul>
					{data?.pages?.edges.map(({ node }) => (
						<li key={node.id}>
							{/* set anchor based on node.slug */}
							<a href={`/${node.slug}`}>{node.title}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

Component.query = gql`
	${BlogInfoFragment}
	query GetPageData {
		pages {
			edges {
				node {
					id
					title
					slug
				}
			}
		}
		generalSettings {
			...BlogInfoFragment
		}
	}
`;
