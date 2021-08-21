import { MDOS, Page } from '../../src/index';

const IntroductionPage = Page({
    Title: "Introduction",
    SubTitle: "Create a beautifully interactive documentations with MDOCS",
    Elements: [
        {
            Components: [
                `Rock area weight church steam influence angry dollar cloud sat shorter ants recent he chance stage
                friend tie ask giant flow open from oil`
            ]
        }
    ]
});

MDOS(
    {
        PageTitle: "Official MDOCS\n Documentation",
        HighlightHue: 274,
        Links: [
            [ "lucsoft.de", "https://lucsoft.de" ],
            [ "GitHub", "https://github.com/lucoft/MDOCS" ]
        ]
    },
    IntroductionPage
)