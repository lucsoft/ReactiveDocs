import { span, SupportedThemes, View, WebGen } from '@lucsoft/webgen';
import { Options } from "../types/options";

WebGen({
    theme: SupportedThemes.white
});

export function start(options: Options) {
    View(({ draw }) => {
        draw(span(options.PageTitle))
    }).appendOn(document.body)
}