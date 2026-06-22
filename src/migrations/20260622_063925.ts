import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_category" AS ENUM('Managed Services', 'Infrastructure Modernisation', 'Data, Analytics & AI', 'Application Modernisation');
  CREATE TABLE "services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "solutions_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-box-open',
  	"tag" varchar,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"tagline" varchar,
  	"description" varchar NOT NULL,
  	"full_description" varchar,
  	"image_url" varchar,
  	"solution_image_id" integer,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "about_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-rocket',
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'About Hitayu',
  	"title_line1" varchar DEFAULT 'Reimagine, digitize, and realize better',
  	"title_highlight" varchar DEFAULT 'business outcomes',
  	"description" varchar DEFAULT 'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.',
  	"image_url" varchar DEFAULT 'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/new-header.png',
  	"image_id" integer,
  	"badge1_title" varchar DEFAULT 'Award Winning',
  	"badge1_sub" varchar DEFAULT 'Best IT Partner 2024',
  	"badge2_title" varchar DEFAULT 'ISO 27001',
  	"badge2_sub" varchar DEFAULT 'Security Certified',
  	"cta_text" varchar DEFAULT 'Partner with Us',
  	"cta_url" varchar DEFAULT '#contact',
  	"agility_title" varchar DEFAULT 'Enabling Agility, Empowering Growth',
  	"agility_description" varchar DEFAULT 'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today''s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.',
  	"agility_image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
  	"agility_image_id" integer,
  	"mvv_eyebrow" varchar DEFAULT 'Our Foundation',
  	"mvv_title_line1" varchar DEFAULT 'Mission, Vision &',
  	"mvv_title_highlight" varchar DEFAULT 'Values',
  	"mission" varchar DEFAULT 'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.',
  	"vision" varchar DEFAULT 'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.',
  	"values" varchar DEFAULT 'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients'' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "careers_page_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-star',
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "careers_page_traits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "careers_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Careers',
  	"title_line1" varchar DEFAULT 'Build Your',
  	"title_highlight" varchar DEFAULT 'Future',
  	"title_line2" varchar DEFAULT 'with Hitayu',
  	"description" varchar DEFAULT 'At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you''re an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You''ll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development.',
  	"image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
  	"image_id" integer,
  	"benefits_eyebrow" varchar DEFAULT 'Why Join Us?',
  	"benefits_title" varchar DEFAULT 'Benefits & Culture',
  	"traits_eyebrow" varchar DEFAULT 'Who We''re Looking For',
  	"traits_title" varchar DEFAULT 'We''re always on the lookout for passionate individuals who are:',
  	"cta_title" varchar DEFAULT 'Join Our Team',
  	"cta_description" varchar DEFAULT 'If you''re ready to take the next step in your career and be part of a forward-thinking organization, we''d love to hear from you.',
  	"cta_button_text" varchar DEFAULT 'Get In Touch',
  	"cta_button_url" varchar DEFAULT '/contact',
  	"careers_email" varchar DEFAULT 'careers@hitayu.com',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "partners_page_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-cloud',
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "partners_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Our Partners',
  	"title_line1" varchar DEFAULT 'Cloud-Agnostic.',
  	"title_highlight" varchar DEFAULT 'Your Cloud,',
  	"title_line2" varchar DEFAULT 'Your Choice, Our Expertise',
  	"description" varchar DEFAULT 'At Hitayu, we believe in delivering solutions that are built around our customers—not limited by specific vendors. That''s why we maintain a cloud-agnostic approach, giving you the freedom to choose the Cloud Service Provider (CSP) that best fits your business needs. Rather than being tied to a single platform, we work across multiple leading cloud ecosystems, ensuring that our solutions are flexible, scalable, and aligned with your strategic goals. Whether you already have a preferred provider or need guidance in selecting one, we support you every step of the way. Our team brings deep in-house expertise across a wide range of cloud platforms, enabling us to design, deploy, and manage solutions with consistency and excellence—regardless of the environment. This multi-platform capability allows us to offer unbiased recommendations and deliver the best possible outcomes for your business. By partnering with us, you gain access to a broad network of technologies and cloud capabilities, combined with the confidence that your solutions are tailored specifically to your requirements—not constrained by vendor limitations.',
  	"image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80',
  	"image_id" integer,
  	"logos_eyebrow" varchar DEFAULT 'Technology Partners',
  	"logos_title" varchar DEFAULT 'Multi-Platform Excellence',
  	"logos_description" varchar DEFAULT 'Rather than being tied to a single platform, we work across multiple leading cloud ecosystems — ensuring our solutions are flexible, scalable, and aligned with your strategic goals. By partnering with us, you gain access to a broad network of technologies combined with the confidence that solutions are tailored specifically to your requirements — not constrained by vendor limitations.',
  	"tagline" varchar DEFAULT 'Your cloud. Your choice. Our expertise.',
  	"cta_button_text" varchar DEFAULT 'Talk to Our Experts',
  	"cta_button_url" varchar DEFAULT '/contact',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_page_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"phone" varchar,
  	"image_id" integer,
  	"image_url" varchar,
  	"icon" varchar DEFAULT 'fas fa-map-marker-alt'
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"page_eyebrow" varchar DEFAULT 'Get In Touch',
  	"page_title" varchar DEFAULT 'Contact Us',
  	"offices_eyebrow" varchar DEFAULT 'Our Offices',
  	"offices_title" varchar DEFAULT 'All Locations',
  	"business_hours" varchar DEFAULT 'Mon–Fri: 9 AM – 6 PM IST',
  	"emergency_support" varchar DEFAULT '24 × 7 × 365',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "site_settings_about_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_careers_page_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_careers_page_traits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_contact_home_page_locations" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "site_settings_about_page_features" CASCADE;
  DROP TABLE "site_settings_careers_page_benefits" CASCADE;
  DROP TABLE "site_settings_careers_page_traits" CASCADE;
  DROP TABLE "site_settings_contact_home_page_locations" CASCADE;
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_about_page_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_about_page_agility_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_careers_page_image_id_media_id_fk";
  
  DROP INDEX "site_settings_about_page_about_page_image_idx";
  DROP INDEX "site_settings_about_page_about_page_agility_image_idx";
  DROP INDEX "site_settings_careers_page_careers_page_image_idx";
  ALTER TABLE "services" ALTER COLUMN "learn_more_url" DROP DEFAULT;
  ALTER TABLE "services" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "category" "enum_services_category" NOT NULL;
  ALTER TABLE "services" ADD COLUMN "tagline" varchar;
  ALTER TABLE "services" ADD COLUMN "full_description" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "services_features" ADD CONSTRAINT "services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_features" ADD CONSTRAINT "solutions_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions" ADD CONSTRAINT "solutions_solution_image_id_media_id_fk" FOREIGN KEY ("solution_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_features" ADD CONSTRAINT "about_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_agility_image_id_media_id_fk" FOREIGN KEY ("agility_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers_page_benefits" ADD CONSTRAINT "careers_page_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."careers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers_page_traits" ADD CONSTRAINT "careers_page_traits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."careers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers_page" ADD CONSTRAINT "careers_page_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners_page_logos" ADD CONSTRAINT "partners_page_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners_page" ADD CONSTRAINT "partners_page_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page_locations" ADD CONSTRAINT "contact_page_locations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page_locations" ADD CONSTRAINT "contact_page_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_features_order_idx" ON "services_features" USING btree ("_order");
  CREATE INDEX "services_features_parent_id_idx" ON "services_features" USING btree ("_parent_id");
  CREATE INDEX "solutions_features_order_idx" ON "solutions_features" USING btree ("_order");
  CREATE INDEX "solutions_features_parent_id_idx" ON "solutions_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX "solutions_solution_image_idx" ON "solutions" USING btree ("solution_image_id");
  CREATE INDEX "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX "about_page_features_order_idx" ON "about_page_features" USING btree ("_order");
  CREATE INDEX "about_page_features_parent_id_idx" ON "about_page_features" USING btree ("_parent_id");
  CREATE INDEX "about_page_image_idx" ON "about_page" USING btree ("image_id");
  CREATE INDEX "about_page_agility_image_idx" ON "about_page" USING btree ("agility_image_id");
  CREATE INDEX "careers_page_benefits_order_idx" ON "careers_page_benefits" USING btree ("_order");
  CREATE INDEX "careers_page_benefits_parent_id_idx" ON "careers_page_benefits" USING btree ("_parent_id");
  CREATE INDEX "careers_page_traits_order_idx" ON "careers_page_traits" USING btree ("_order");
  CREATE INDEX "careers_page_traits_parent_id_idx" ON "careers_page_traits" USING btree ("_parent_id");
  CREATE INDEX "careers_page_image_idx" ON "careers_page" USING btree ("image_id");
  CREATE INDEX "partners_page_logos_order_idx" ON "partners_page_logos" USING btree ("_order");
  CREATE INDEX "partners_page_logos_parent_id_idx" ON "partners_page_logos" USING btree ("_parent_id");
  CREATE INDEX "partners_page_image_idx" ON "partners_page" USING btree ("image_id");
  CREATE INDEX "contact_page_locations_order_idx" ON "contact_page_locations" USING btree ("_order");
  CREATE INDEX "contact_page_locations_parent_id_idx" ON "contact_page_locations" USING btree ("_parent_id");
  CREATE INDEX "contact_page_locations_image_idx" ON "contact_page_locations" USING btree ("image_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");
  ALTER TABLE "site_settings" DROP COLUMN "about_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_description";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge1_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge1_sub";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge2_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge2_sub";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_cta_text";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_cta_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_description";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mission";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_vision";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_values";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_line2";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_description";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_benefits_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_benefits_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_traits_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_traits_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_description";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_careers_email";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_page_title";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_offices_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_offices_title";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_business_hours";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_emergency_support";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings_about_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-rocket',
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_careers_page_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-star',
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "site_settings_careers_page_traits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_contact_home_page_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"phone" varchar,
  	"image_id" integer,
  	"image_url" varchar,
  	"icon" varchar DEFAULT 'fas fa-map-marker-alt'
  );
  
  ALTER TABLE "services_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "careers_page_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "careers_page_traits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "careers_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners_page_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page_locations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "services_features" CASCADE;
  DROP TABLE "solutions_features" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "about_page_features" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "careers_page_benefits" CASCADE;
  DROP TABLE "careers_page_traits" CASCADE;
  DROP TABLE "careers_page" CASCADE;
  DROP TABLE "partners_page_logos" CASCADE;
  DROP TABLE "partners_page" CASCADE;
  DROP TABLE "contact_page_locations" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_solutions_fk";
  
  DROP INDEX "services_slug_idx";
  DROP INDEX "payload_locked_documents_rels_solutions_id_idx";
  ALTER TABLE "services" ALTER COLUMN "learn_more_url" SET DEFAULT '#';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_eyebrow" varchar DEFAULT 'About Hitayu';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_title_line1" varchar DEFAULT 'Reimagine, digitize, and realize better';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_title_highlight" varchar DEFAULT 'business outcomes';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_description" varchar DEFAULT 'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_image_url" varchar DEFAULT 'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/new-header.png';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge1_title" varchar DEFAULT 'Award Winning';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge1_sub" varchar DEFAULT 'Best IT Partner 2024';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge2_title" varchar DEFAULT 'ISO 27001';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge2_sub" varchar DEFAULT 'Security Certified';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_cta_text" varchar DEFAULT 'Partner with Us';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_cta_url" varchar DEFAULT '#contact';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_title" varchar DEFAULT 'Enabling Agility, Empowering Growth';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_description" varchar DEFAULT 'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today''s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_eyebrow" varchar DEFAULT 'Our Foundation';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_title_line1" varchar DEFAULT 'Mission, Vision &';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_title_highlight" varchar DEFAULT 'Values';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mission" varchar DEFAULT 'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_vision" varchar DEFAULT 'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_values" varchar DEFAULT 'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients'' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_eyebrow" varchar DEFAULT 'Careers';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_line1" varchar DEFAULT 'Build Your';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_highlight" varchar DEFAULT 'Future';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_line2" varchar DEFAULT 'with Hitayu';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_description" varchar DEFAULT 'At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you''re an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You''ll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development.';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_benefits_eyebrow" varchar DEFAULT 'Why Join Us?';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_benefits_title" varchar DEFAULT 'Benefits & Culture';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_traits_eyebrow" varchar DEFAULT 'Who We''re Looking For';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_traits_title" varchar DEFAULT 'We''re always on the lookout for passionate individuals who are:';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_title" varchar DEFAULT 'Join Our Team';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_description" varchar DEFAULT 'If you''re ready to take the next step in your career and be part of a forward-thinking organization, we''d love to hear from you.';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_button_text" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_button_url" varchar DEFAULT '/contact';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_careers_email" varchar DEFAULT 'careers@hitayu.com';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_page_eyebrow" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_page_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_offices_eyebrow" varchar DEFAULT 'Our Offices';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_offices_title" varchar DEFAULT 'All Locations';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_business_hours" varchar DEFAULT 'Mon–Fri: 9 AM – 6 PM IST';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_emergency_support" varchar DEFAULT '24 × 7 × 365';
  ALTER TABLE "site_settings_about_page_features" ADD CONSTRAINT "site_settings_about_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_careers_page_benefits" ADD CONSTRAINT "site_settings_careers_page_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_careers_page_traits" ADD CONSTRAINT "site_settings_careers_page_traits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_contact_home_page_locations" ADD CONSTRAINT "site_settings_contact_home_page_locations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_contact_home_page_locations" ADD CONSTRAINT "site_settings_contact_home_page_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings_about_page_features_order_idx" ON "site_settings_about_page_features" USING btree ("_order");
  CREATE INDEX "site_settings_about_page_features_parent_id_idx" ON "site_settings_about_page_features" USING btree ("_parent_id");
  CREATE INDEX "site_settings_careers_page_benefits_order_idx" ON "site_settings_careers_page_benefits" USING btree ("_order");
  CREATE INDEX "site_settings_careers_page_benefits_parent_id_idx" ON "site_settings_careers_page_benefits" USING btree ("_parent_id");
  CREATE INDEX "site_settings_careers_page_traits_order_idx" ON "site_settings_careers_page_traits" USING btree ("_order");
  CREATE INDEX "site_settings_careers_page_traits_parent_id_idx" ON "site_settings_careers_page_traits" USING btree ("_parent_id");
  CREATE INDEX "site_settings_contact_home_page_locations_order_idx" ON "site_settings_contact_home_page_locations" USING btree ("_order");
  CREATE INDEX "site_settings_contact_home_page_locations_parent_id_idx" ON "site_settings_contact_home_page_locations" USING btree ("_parent_id");
  CREATE INDEX "site_settings_contact_home_page_locations_image_idx" ON "site_settings_contact_home_page_locations" USING btree ("image_id");
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_about_page_image_id_media_id_fk" FOREIGN KEY ("about_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_about_page_agility_image_id_media_id_fk" FOREIGN KEY ("about_page_agility_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_careers_page_image_id_media_id_fk" FOREIGN KEY ("careers_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_about_page_about_page_image_idx" ON "site_settings" USING btree ("about_page_image_id");
  CREATE INDEX "site_settings_about_page_about_page_agility_image_idx" ON "site_settings" USING btree ("about_page_agility_image_id");
  CREATE INDEX "site_settings_careers_page_careers_page_image_idx" ON "site_settings" USING btree ("careers_page_image_id");
  ALTER TABLE "services" DROP COLUMN "slug";
  ALTER TABLE "services" DROP COLUMN "category";
  ALTER TABLE "services" DROP COLUMN "tagline";
  ALTER TABLE "services" DROP COLUMN "full_description";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "solutions_id";
  DROP TYPE "public"."enum_services_category";`)
}
