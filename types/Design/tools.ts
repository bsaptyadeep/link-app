export type ComponentType = CreativeToolType | layoutType;

export type CreativeToolType = 'link' | 'iconLink' | 'text' | 'profileImage';

export type layoutType = 'flexHorizontal' | 'flexVertical';

export interface CreativeTool {
    id: string;
    icon: React.ReactNode;
    label: string;
    type: CreativeToolType;
}

export interface ILinkButton {
    label: string;
    url: string;
}

// ----------------------------------------------

export type ToolType = "layout" | "link-button" | "link-icon" | "text" | "image" | "select";

export interface IDesignToolSection {
    id: string,
    label: string,
    type: ToolType,
    icon: React.ReactNode
    tools?: DesignTool[]
}

export type DesignTool = {
    id: string;
    label: string;
    icon: React.ReactNode;
}