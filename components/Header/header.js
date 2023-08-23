import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.svg";

export default function Header({ menuItems }) {
	return (
		<header className="site-navigation">
			<nav className="container">
				<Link href="/">
					<a aria-label="Home">
						<Image priority src={logo} alt="Driven.World" />
					</a>
				</Link>

				<ul className="nav">
					{menuItems.map((item, index) => {
						const link = item.link;
						let btnClass = "btn btn--small";
						if (index === 0) btnClass += " btn--tertiary";
						if (index === 1) btnClass += " btn--primary";

						return (
							<li key={index}>
								<Link href={link.url}>
									<a className={btnClass}>{link.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

Header.fragments = {
	entry: gql`
		fragment HeaderFragment on DrivenThemeSettings {
			themeSettings {
				mainNavigation {
					link {
						title
						url
						target
					}
				}
			}
		}
	`,
};
