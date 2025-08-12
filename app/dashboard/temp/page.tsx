"use client"
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Template } from "@/types/template";
import Loader from "@/components/ui/Loader";
import { DEFAULT_TEMPLATES } from "@/constants/templates";
import { TemplatePreview } from "../components/TemplatePreview/TemplatePreview";


export default function TemplatesPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
    const [templates, setTemplates] = useState<Template[]>([...DEFAULT_TEMPLATES]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    if (loading) return <Loader text="Fetching templates..." />;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Choose a Template</h1>
                <p className="text-muted-foreground">Select a template for your LinkHub page</p>
            </div>

            <Tabs defaultValue="all" className="mb-6">
                <TabsList>
                    <TabsTrigger value="all">All Templates</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="pt-4">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {templates.map((template) => {
                            return (
                                <TemplatePreview template={template} isSelected={selectedTemplate === template.id} onClick={() => setSelectedTemplate(template.id)} />
                            )
                        })}
                    </div>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end">
                <Button>
                    <Link href={`/dashboard/editor?templateId=${selectedTemplate}`}>
                        Apply template
                    </Link>
                </Button>
            </div>
        </div>
    );
}

