import React from 'react';
import {
  DEVELOPER_META,
  CORE_KEYWORD_TAXONOMY,
  STRUCTURED_SCHEMAS,
} from '@/data/seoKeywords';

export const SeoStructuredContent: React.FC = () => {
  return (
    <>
      {/* 1. SoftwareApplication JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_SCHEMAS.softwareApp),
        }}
      />

      {/* 2. Person (Nishant Gaurav / codewithevilxd) JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_SCHEMAS.personAuthor),
        }}
      />

      {/* 3. FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_SCHEMAS.faqPage),
        }}
      />

      {/* 4. Semantic Search Engine Indexer & Taxonomy Directory (Hidden visually, indexable by crawlers) */}
      <aside
        className="sr-only select-none pointer-events-none"
        aria-hidden="true"
        data-nosnippet="false"
      >
        <h2>KaruFit Semantic Knowledge Graph & Developer Attribution</h2>
        <p>
          Architected and engineered by <strong>{DEVELOPER_META.name}</strong> (known online as <strong>{DEVELOPER_META.alias}</strong>).
          Project: {DEVELOPER_META.project}. GitHub repository: {DEVELOPER_META.github}.
        </p>
        <p>{DEVELOPER_META.bio}</p>

        <h3>Core Video Compression Engine Keywords & Capabilities</h3>
        <ul>
          {CORE_KEYWORD_TAXONOMY.videoCompressionCore.map((kw, i) => (
            <li key={`v-${i}`}>{kw}</li>
          ))}
        </ul>

        <h3>28+ Offline PDF Studio Tools & Document Utilities</h3>
        <ul>
          {CORE_KEYWORD_TAXONOMY.pdfToolsCore.map((kw, i) => (
            <li key={`p-${i}`}>{kw}</li>
          ))}
        </ul>

        <h3>Technical Hardware Specifications & Codec Integrations</h3>
        <ul>
          {CORE_KEYWORD_TAXONOMY.technicalArchitecture.map((kw, i) => (
            <li key={`t-${i}`}>{kw}</li>
          ))}
        </ul>

        <h3>Developer Indexing & Identity Attribution</h3>
        <ul>
          {CORE_KEYWORD_TAXONOMY.developerAndBranding.map((kw, i) => (
            <li key={`d-${i}`}>{kw}</li>
          ))}
        </ul>
      </aside>
    </>
  );
};
