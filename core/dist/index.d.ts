import { Node as PMNode } from 'prosemirror-model';
import { Transaction } from 'prosemirror-state';
import { Plugin as Plug } from "prosemirror-state";
import { EditorView } from 'prosemirror-view';
type Plugin = Plug & {
    key: string;
};
type ButtonPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
interface DevToolsOpts {
    devToolsExpanded?: boolean;
    buttonPosition?: ButtonPosition;
}
/**
 * Applies devTools to the given EditorView.
 *
 * Will remove previous devTools instance first, then subscribes to the view's
 * transactions by adding a dispatchTransaction prop. If previous dispatchTransaction
 * prop exists, passes the transaction to it. Otherwise updates the state as normal.
 * Will destroy itself whenever view is destroyed or removeDevTools() is called.
 * @param view
 * @param opts
 */
declare function applyDevTools(view: EditorView, opts?: DevToolsOpts): void;
declare function removeDevTools(): void;
declare global {
    interface Window {
        applyDevTools: typeof applyDevTools;
        editorView?: EditorView;
        _node?: {
            node: PMNode;
            pos: number;
        };
        _doc?: {
            [key: string]: any;
        };
        _trs?: Transaction[];
        _plugin?: [Plugin | undefined, unknown];
    }
}
export { applyDevTools, removeDevTools, ButtonPosition, DevToolsOpts };
