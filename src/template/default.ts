import { span, SupportedThemes, View, WebGen } from '@lucsoft/webgen';
import { Options } from "../types/options";
import { ActionBar } from "./components/actionBar";


export function start(options: Options) {
    WebGen({
        theme: SupportedThemes.white,
        events: {
            themeChanged: (_, style) => {
                style.overrideTheme({
                    [ "--highlight-hue" ]: options.HighlightHue.toString()
                })
            }
        }
    });

    View(({ draw }) => {
        draw(ActionBar(options))
    }).appendOn(document.body)
}