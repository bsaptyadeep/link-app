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
                            <Card
                                key={template.id}
                                className={`overflow-hidden ${selectedTemplate === template.id ? "ring-2 ring-primary" : ""}`}
                            >
                                <CardContent className="p-0">
                                    <div className={`relative ${template.metadata.background} h-64 w-full`}>
                                        <div className="absolute inset-0 flex flex-col items-center p-4">
                                            <div className="mt-4 h-12 w-12 rounded-full bg-white/20"></div>
                                            <div className="mt-2 h-4 w-24 rounded-full bg-white/20"></div>
                                            <div className="mt-4 w-full space-y-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className={`mx-auto h-8 w-4/5 ${template.metadata.buttonStyle}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                        {selectedTemplate === template.id && (
                                            <div className="absolute right-2 top-2 rounded-full bg-primary p-1">
                                                <Check className="h-4 w-4 text-primary-foreground" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium">{template.name}</h3>
                                        <p className="text-sm text-muted-foreground">{template.description}</p>
                                        <Button
                                            variant={selectedTemplate === template.id ? "default" : "outline"}
                                            className="mt-2 w-full"
                                            onClick={() => setSelectedTemplate(template.id)}
                                        >
                                            {selectedTemplate === template.id ? "Selected" : "Select"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )})}
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

