import { SimpleTreeView } from "@mui/x-tree-view"
import { TreeViewerProps } from "./TreeViewer.type"
import { TreeViewerItem } from "./TreeViewerItem/TreeViewerItem"
import { useCallback } from "react";

export const TreeViewer = ({ jsonValue }: TreeViewerProps) => {
    const buildPath = (path: string, key: string, isArray: boolean = false) => {
        if (path === '') {
            console.log(isArray ? `$[${key}]` : `$${key ? '.' + key : ''}`)
            return isArray ? `$[${key}]` : `$${key ? '.' + key : ''}`;
        } else {
            console.log(isArray ? `${path}[${key}]` : `${path}.${key}`)
            return isArray ? `${path}[${key}]` : `${path}.${key}`;
        }
    };

    const renderNullItem = useCallback((path: string, key: string) => {
        const nodePath = buildPath(path, key);
        return (
            <TreeViewerItem key={nodePath} itemId={nodePath} keyNode={key} value={"null"} />
        );
    }, []);

    const renderObjectItem = useCallback((value: any, path: string, key: string) => {
        const nodePath = buildPath(path, key);
        const objectKeys = Object.keys(value);
        const length = objectKeys.length;

        return (
            <TreeViewerItem key={nodePath} itemId={nodePath} keyNode={key} value={`[${length} items]`}>
                {objectKeys.map((item) => {
                    return renderTreeItems(value[item], nodePath, item);
                })}
            </TreeViewerItem>
        );
    }, []);

    const renderArrayItem = useCallback((value: any[], path: string, key: string) => {
        const nodePath = buildPath(path, key, true);
        const length = value.length;

        return (
            <TreeViewerItem key={nodePath} itemId={nodePath} keyNode={key} value={`[${length} items]`}>
                <>
                    {value.map((item, index) => {
                        const childKey = index.toString();
                        return renderTreeItems(item, nodePath, childKey);
                    })}
                </>
            </TreeViewerItem>
        );
    }, []);

    const renderLeafItem = useCallback((value: any, path: string, key: string) => {
        const nodePath = buildPath(path, key, Array.isArray(value));
        return (
            <TreeViewerItem key={nodePath} itemId={nodePath} keyNode={key} value={`${value}`} />
        );
    }, []);

    const renderTreeItems = useCallback((value: any, path: string = '', key: string = '') => {
        if (value === null || value === undefined) {
            return renderNullItem(path, key);
        }

        const renderers: Record<string, (value: any, path: string, key: string) => JSX.Element> = {
            object: renderObjectItem,
            array: renderArrayItem,
            default: renderLeafItem
        };

        const valueType = Array.isArray(value) ? 'array' : typeof value;
        const renderFunction = renderers[valueType] || renderers.default;

        return renderFunction(value, path, key);
    }, [renderNullItem, renderArrayItem, renderObjectItem, renderLeafItem]);
    
    return (
        <SimpleTreeView defaultExpandedItems={[`$[]`, '$']}>
            {renderTreeItems(jsonValue, '', '')}
        </SimpleTreeView>
    );
};
