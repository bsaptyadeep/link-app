import { ComponentType, ToolType } from '@/types/Design/tools';
import { create } from 'zustand';

export interface Component {
    id: string;
    type: ToolType;
    props: { [key: string]: any };
    style: { [key: string]: any };
    children?: Component[]; // Array of child components
}

// Editor store interface
interface EditorStore {
    // State
    components: Component[];
    selectedComponent: Component | null;
    setSelectedComponent: (component: Component) => void;

    // Actions
    updateLayoutComponent: (id: string, updates: Partial<Component>) => void;
    addLayoutBox: (newElement: Component, targetId?: string) => void;
    //   setSelectedComponent: (id: string | null) => void;
    //   setSelectedComponents: (ids: string[]) => void;
    //   addToSelection: (id: string) => void;
    //   removeFromSelection: (id: string) => void;
    //   clearSelection: () => void;
    //   groupComponents: (containerType: 'flexContainer' | 'gridContainer') => void;
    //   ungroupComponents: () => void;
    //   togglePreviewMode: () => void; // New: toggle preview mode

}


export const useEditorStore = create<EditorStore>((set, get) => ({
    components: [
    ],
    selectedComponent: null,
    setSelectedComponent: (
        component: Component
    ) => {
        set(() => {
            return {
                selectedComponent: component
            }
        })
    },

    addLayoutBox: (
        newElement: Component,
        targetId?: string
    ) => {
        set((state) => {
            if(!targetId){
                return { components: [newElement] };
            }
            const index = state.components.findIndex((comp) => comp.id === targetId);

            if (index === -1) {
                console.warn(`Component with id "${targetId}" not found.`);
                return { components: state.components };
            }
            const updatedComponents = [
                ...state.components.slice(0, index + 1),
                newElement,
                ...state.components.slice(index + 1),
            ];
            return { components: updatedComponents };
        });
    },

    updateLayoutComponent: (id: string, updates: Partial<Component>) => {
        set((state) => {
            const newState = {
                components: state.components.map((component) =>
                    component.id === id
                        ? { ...component, ...updates }
                        : component
                ),
            };

            // Auto-save to localStorage
            try {
                const schema = {
                    type: "page",
                    components: newState.components
                };
                localStorage.setItem('editor-schema', JSON.stringify(schema));
            } catch (error) {
                console.error('Auto-save failed:', error);
            }

            return newState;
        });
    }
}))