import { createElement, RenderElement, custom, span, mIcon } from "@lucsoft/webgen"
import '../../style/actionBar.css';
import { Options } from "../../types/options";
export const ActionBar = (options: Options): RenderElement => ({
    draw: () => {
        const shell = custom('div', undefined, "action-bar");
        const logoArea = custom('div', undefined, "logo-area");
        const linksArea = custom('div', undefined, "links-area");
        logoArea.append(mIcon("auto_stories", "m-icon"))
        const link = custom('a', options.PageTitle, "title") as HTMLAnchorElement
        link.href = options.BaseUrl;
        logoArea.append(link)
        options.Links.forEach(([ displayName, href ]) => {
            const link = custom('a', displayName, "title", "always") as HTMLAnchorElement;
            link.href = href;
            linksArea.append(link);
        })
        shell.append(logoArea, linksArea);
        return shell;
    }
})