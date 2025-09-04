import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckSquare, Clock, Download, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labor & Pregnancy Resources",
  description:
    "Free downloadable resources for labor preparation including hospital bag checklists, emergency contact templates, and printable contraction tracking sheets.",
  keywords: [
    "labor preparation resources",
    "hospital bag checklist",
    "emergency contact template",
    "printable contraction tracker",
    "pregnancy checklist",
    "birth preparation",
    "labor tools",
    "pregnancy resources",
  ],
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Labor & Pregnancy Resources | Contracking",
    description:
      "Free downloadable resources for labor preparation and pregnancy planning.",
    url: "https://contracking.me/resources",
    images: ["/og-image.jpg"],
  },
};

interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  type: "checklist" | "template" | "guide" | "printable";
  icon: React.ComponentType<{ className?: string }>;
  featured: boolean;
}

const resources: Resource[] = [
  {
    slug: "labor-preparation-checklist",
    title: "Labor Preparation Checklist",
    description:
      "Comprehensive checklist covering everything you need to prepare for labor, from 36 weeks to delivery day.",
    category: "Preparation",
    type: "checklist",
    icon: CheckSquare,
    featured: true,
  },
  {
    slug: "hospital-bag-checklist",
    title: "Hospital Bag Checklist",
    description:
      "Complete packing list for your hospital bag, including items for mom, baby, and birth partner.",
    category: "Preparation",
    type: "checklist",
    icon: CheckSquare,
    featured: true,
  },
  {
    slug: "emergency-contact-templates",
    title: "Emergency Contact Templates",
    description:
      "Pre-formatted contact cards and templates for quick communication during labor emergencies.",
    category: "Emergency",
    type: "template",
    icon: Phone,
    featured: false,
  },
  {
    slug: "printable-contraction-sheets",
    title: "Printable Contraction Tracking Sheets",
    description:
      "Physical backup sheets for tracking contractions when digital tools aren't available.",
    category: "Tracking",
    type: "printable",
    icon: Clock,
    featured: true,
  },
];

export default function ResourcesPage() {
  const featuredResources = resources.filter((resource) => resource.featured);
  const allResources = resources;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Labor & Pregnancy Resources
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Free downloadable resources to help you prepare for labor and manage
          your pregnancy journey with confidence.
        </p>
      </div>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card
                  key={resource.slug}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg">
                        <Link
                          href={`/resources/${resource.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {resource.title}
                        </Link>
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span className="text-sm text-muted-foreground capitalize">
                        {resource.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          All Resources
        </h2>
        <div className="grid gap-6">
          {allResources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card
                key={resource.slug}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      {resource.featured && (
                        <Badge variant="outline">Featured</Badge>
                      )}
                      <Badge variant="outline" className="capitalize">
                        {resource.type}
                      </Badge>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">
                      <Link
                        href={`/resources/${resource.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {resource.title}
                      </Link>
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-green-600" />
                Preparation
              </CardTitle>
              <CardDescription>
                Checklists and guides to help you prepare for labor and
                delivery.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {resources.filter((r) => r.category === "Preparation").length}{" "}
                resources available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                Emergency
              </CardTitle>
              <CardDescription>
                Templates and contact information for emergency situations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {resources.filter((r) => r.category === "Emergency").length}{" "}
                resources available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Tracking
              </CardTitle>
              <CardDescription>
                Tools and sheets for tracking labor progress and contractions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {resources.filter((r) => r.category === "Tracking").length}{" "}
                resources available
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Time Your Contractions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            While these resources help you prepare, our contraction timer is
            here when you need it most - during labor.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Open Contraction Timer
          </Link>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Medical Disclaimer:</strong> These resources are for
          educational purposes only and should not replace professional medical
          advice. Always consult with your healthcare provider regarding your
          pregnancy, labor, and delivery plans.
        </p>
      </div>
    </div>
  );
}

