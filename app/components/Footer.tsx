import React from "react";

// Example icon type
type IconProps = {
  s?: number;
  c?: string;
  sw?: number;
};

type IconComponent = React.ComponentType<IconProps>;

// Replace with your actual icons
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
        background:
          "linear-gradient(135deg, #140b24 0%, #24113d 50%, #1A0F2E 100%)",
        padding: "70px 0 40px",
        color: "#fff",
        marginTop: "120px",
      }}
    >
      {/* Main Wrapper aligned with navbar */}
      <div
        style={{
          width: "95%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 60,
            marginBottom: 60,
          }}
        >
          {/* Left Section */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 42,
                marginBottom: 18,
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              Pick
              <span style={{ color: "#C084FC" }}>Perfect</span>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,.55)",
                fontSize: 15,
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Your destination for thoughtful, curated gifts. Every occasion,
              every person — perfectly gifted.
            </p>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 28,
              }}
            >
              {icons.map((Ico, i) => (
                <div
                  key={i}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .25s ease",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(192,132,252,.18)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,.08)";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  <Ico s={16} c="rgba(255,255,255,.75)" sw={1.6} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Columns */}
          <div
            style={{
              display: "flex",
              gap: 90,
              flexWrap: "wrap",
            }}
          >
            {columns.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 18,
                    marginBottom: 24,
                    color: "#fff",
                  }}
                >
                  {col.title}
                </div>

                {col.links.map((l) => (
                  <div
                    key={l}
                    style={{
                      color: "rgba(255,255,255,.45)",
                      fontSize: 14,
                      marginBottom: 14,
                      cursor: "pointer",
                      transition: "all .2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D8A8FF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(255,255,255,.45)";
                      e.currentTarget.style.transform = "translateX(0px)";
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 28,
            color: "rgba(255,255,255,.28)",
            fontSize: 13,
            textAlign: "center",
            letterSpacing: ".3px",
          }}
        >
          © 2026 PickPerfect · Made with care for gift lovers everywhere.
        </div>
      </div>
    </footer>
  );
};

export default Footer;