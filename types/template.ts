export interface TemplateMetadata {
    background: React.CSSProperties
    buttonStyle: React.CSSProperties
    textColor: React.CSSProperties
    bioColor: React.CSSProperties
    profileRing: React.CSSProperties
}

export interface TemplateBase {
  name: string;
  description: string;
  metadata: TemplateMetadata;
}

export interface Template extends TemplateBase {
  id: number;
}
