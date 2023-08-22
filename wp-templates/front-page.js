import { useQuery, gql } from "@apollo/client";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import Link from "next/link";

export default function Component() {
	const { data } = useQuery(Component.query);

	const { title: siteTitle, description: siteDescription } =
		data?.generalSettings;

	return (
		<>
			<h1>{siteTitle}</h1>
			<ul>
				{data?.pages?.edges.map(({ node }) => (
					<li key={node.id}>
						{/* set anchor based on node.slug */}
						<Link href={`/${node.slug}`}>{node.title}</Link>
					</li>
				))}
			</ul>
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
