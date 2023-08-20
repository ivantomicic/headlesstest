import { useQuery, gql } from "@apollo/client";
import { useAuth } from "@faustwp/core";
import * as MENUS from "../constants/menus";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import {
	Header,
	Footer,
	Main,
	Container,
	NavigationMenu,
	Hero,
	SEO,
} from "../components";

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	CssBaseline,
	Radio,
} from "@mui/material";
import { Button, getTheme, Link } from "../omajgad/coreui";
import { ThemeProvider } from "@mui/material/styles";

export function AuthenticatedView() {
	return <p>My authenticated content</p>;
}

export default function Component() {
	const { isAuthenticated, isReady, loginUrl } = useAuth();

	const { data } = useQuery(Component.query, {
		variables: Component.variables(),
	});

	const { title: siteTitle, description: siteDescription } =
		data?.generalSettings;
	const primaryMenu = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];

	return (
		<>
			<SEO title={siteTitle} description={siteDescription} />
			<Header
				title={siteTitle}
				description={siteDescription}
				menuItems={primaryMenu}
			/>
			<Main>
				<Container>
					<Hero title={"Front Page"} />
					<div className="text-center">
						<p>
							This page is utilizing the "front-page" WordPress
							template.
						</p>
						<code>wp-templates/front-page.js</code>
						{isAuthenticated && isReady ? (
							<AuthenticatedView />
						) : (
							<div>
								<a href={loginUrl}>Login</a>
							</div>
						)}
					</div>

					<ThemeProvider theme={getTheme()}>
						<CssBaseline />
						<Button onClick={(x) => console.log(x)}>
							Awesome button!
						</Button>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Age
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value="10"
								label="Age"
								onChange={() => console.log("changed")}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>

						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Gender
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Other"
								/>
							</RadioGroup>
						</FormControl>
					</ThemeProvider>
				</Container>
			</Main>
			<Footer title={siteTitle} menuItems={footerMenu} />
		</>
	);
}

Component.query = gql`
	${BlogInfoFragment}
	${NavigationMenu.fragments.entry}
	query GetPageData(
		$headerLocation: MenuLocationEnum
		$footerLocation: MenuLocationEnum
	) {
		generalSettings {
			...BlogInfoFragment
		}
		headerMenuItems: menuItems(where: { location: $headerLocation }) {
			nodes {
				...NavigationMenuItemFragment
			}
		}
		footerMenuItems: menuItems(where: { location: $footerLocation }) {
			nodes {
				...NavigationMenuItemFragment
			}
		}
	}
`;

Component.variables = () => {
	return {
		headerLocation: MENUS.PRIMARY_LOCATION,
		footerLocation: MENUS.FOOTER_LOCATION,
	};
};
