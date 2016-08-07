import {Main} from "./main";
import { bootstrap }    from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
bootstrap(Main, [HTTP_PROVIDERS]);