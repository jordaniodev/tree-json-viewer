import { TreeItem } from "@mui/x-tree-view";
import { TreeItemAction, TreeItemActionIcon, TreeItemActionLabel, TreeItemContent, TreeItemIcon, TreeItemValue } from "./TreeViewerItem.style";
import { TreeViewerItemProps } from "./TreeViewerItem.type";

export const TreeViewerItem = ({ children, itemId, keyNode, value }: TreeViewerItemProps) => {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(itemId).then(() => {
            console.log(`Item ID "${itemId}" copied to the clipboard.`);
        }).catch(err => {
            console.error("Failed to copy to clipboard: ", err);
        });
    };

    return (
        <TreeItem 
            itemId={itemId} 
            label={
                <TreeItemContent>
                    {!children ? <TreeItemIcon>T</TreeItemIcon> : ''}
                    {keyNode ? keyNode : '[empty key]'}
                    <TreeItemValue>{value}</TreeItemValue>
                    {!children ? (
                        <TreeItemAction onClick={handleCopyToClipboard}>
                            <TreeItemActionIcon src="/img/icons/copy.svg" />
                            <TreeItemActionLabel>Create column</TreeItemActionLabel>
                        </TreeItemAction>
                    ) : ''}
                </TreeItemContent>
            }
        >
            {children}
        </TreeItem>
    );
};
