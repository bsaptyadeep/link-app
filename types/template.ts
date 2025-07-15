export interface TemplateMetadata {
  background: string;
  buttonStyle: string;
}

export interface TemplateBase {
  name: string;
  description: string;
  metadata: TemplateMetadata;
}

export interface Template extends TemplateBase {
  id: number;
}
