import React from "react";

// Example icon type (adjust based on your actual icon library)
type IconProps = {
  s?: number;
  c?: string;
  sw?: number;
};

type IconComponent = React.ComponentType<IconProps>;

// Replace this with your actual icon imports
const Ic: Record<string, IconComponent> = {
  Heart: (props) => <div {...props}>❤️</div>,
  Music: (props) => <div {...props}>🎵</div>,
  Camera: (props) => <div {...props}>📷</div>,
  Sparkle: (props) => <div {...props}>✨</div>,
};

const Footer: React.FC = () => {
  const columns = [
    {
      title: "Discover",
      links: ["Trending Gifts", "New Arrivals", "Secret Box", "Gift Guides"],
    },
    {
      title: "Shop",
      links: ["For Her", "For Him", "Luxury", "Under $50"],
    },
    {
      title: "Help",
      links: ["FAQ", "Shipping", "Returns", "Contact"],
    },
  ];

  const icons: IconComponent[] = [
    Ic.Heart,
    Ic.Music,
    Ic.Camera,
    Ic.Sparkle,
  ];

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        background: "#1A0F2E",
        padding: "64px 64px 40px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 44,
          marginBottom: 52,
        }}
      >
        {/* Left Section */}
        <div style={{ maxWidth: 270 }}>
          <div
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: 24,
              marginBottom: 14,
            }}
          >
            Pick<em style={{ color: "#D8A8FF" }}>Perfect</em>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,.48)",
              fontSize: 14,
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Your destination for thoughtful, curated gifts. Every occasion,
            every person — perfectly gifted.
          </p>

          {/* Icons */}
          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            {icons.map((Ico, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,.16)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,.08)";
                }}
              >
                <Ico s={15} c="rgba(255,255,255,.65)" sw={1.6} />
              </div>
            ))}
          </div>
        </div>

        {/* Columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: 16,
                marginBottom: 18,
              }}
            >
              {col.title}
            </div>

            {col.links.map((l) => (
              <div
                key={l}
                style={{
                  color: "rgba(255,255,255,.42)",
                  fontSize: 13,
                  marginBottom: 12,
                  cursor: "pointer",
                  transition: "color .2s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.color = "#D8A8FF";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.color =
                    "rgba(255,255,255,.42)";
                }}
              >
                {l}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.07)",
          paddingTop: 24,
          color: "rgba(255,255,255,.25)",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        © 2025 PickPerfect · Made with care for gift lovers everywhere.
      </div>
    </footer>
  );
};

export default Footer;