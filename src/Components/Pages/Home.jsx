
// Plugins or Packages
import React, { useEffect } from "react";
import { Layout, Button, Row, Col, Card } from "antd";
import * as Separator from "@radix-ui/react-separator";
import { motion, useScroll, useTransform } from "framer-motion";

// Components
import { Header as MainNavigation } from "../Core/Header";

const { Header, Content } = Layout;

const Home = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 600], [0, -200]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);
  const floatingY = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <>
        <MainNavigation />
        <Layout style={{ background: "#0f172a", color: "white" }}>
        <Header
            style={{
            background: "transparent",
            position: "fixed",
            width: "100%",
            zIndex: 10,
            }}
        >
            <h2 style={{ color: "white" }}>My Product</h2>
        </Header>

        <Content>
            {/* HERO SECTION */}
            <section
            style={{
                height: "100vh",
                position: "relative",
                overflow: "hidden",
                paddingTop: 80,
            }}
            >
            {/* Background Layer */}
            <motion.div
                style={{
                position: "absolute",
                inset: 0,
                background:
                    "radial-gradient(circle at top, #2563eb, #020617)",
                y: bgY,
                }}
            />

            {/* Floating Shapes */}
            <motion.div
                style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                y: floatingY,
                }}
            />
            <motion.div
                style={{
                position: "absolute",
                bottom: "15%",
                right: "12%",
                width: 180,
                height: 180,
                borderRadius: 24,
                background: "rgba(255,255,255,0.08)",
                y: floatingY,
                }}
            />

            {/* Hero Content */}
            <motion.div
                style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                maxWidth: 900,
                margin: "0 auto",
                padding: "0 16px",
                y: textY,
                }}
            >
                <h1 style={{ fontSize: 56, marginBottom: 16 }}>
                Build Stunning Experiences
                </h1>
                <p style={{ fontSize: 18, opacity: 0.9 }}>
                A modern parallax homepage using Radix UI, Ant Design, and Framer Motion
                </p>
                <div style={{ marginTop: 32 }}>
                <Button type="primary" size="large" style={{ marginRight: 12 }}>
                    Get Started
                </Button>
                <Button size="large">Learn More</Button>
                </div>
            </motion.div> 
            </section>

            <Separator.Root
            style={{
                height: 1,
                background: "rgba(255,255,255,0.1)",
                margin: "80px 0",
            }}
            />

            {/* FEATURES SECTION */}
            <section style={{ padding: "0 10% 120px" }}>
            <h2 style={{ textAlign: "center", marginBottom: 48 }}>
                Powerful Features
            </h2>

            <Row gutter={[24, 24]}>
                {[
                {
                    title: "Parallax Motion",
                    desc: "Smooth scroll-based animations for immersive UX",
                },
                {
                    title: "Radix UI",
                    desc: "Accessible primitives with full control",
                },
                {
                    title: "Ant Design",
                    desc: "Enterprise-ready UI components",
                },
                ].map((f, i) => (
                <Col xs={24} md={8} key={i}>
                    <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    >
                    <Card
                        bordered={false}
                        style={{
                        background: "#020617",
                        color: "white",
                        borderRadius: 16,
                        height: "100%",
                        }}
                    >
                        <h3>{f.title}</h3>
                        <p style={{ opacity: 0.8 }}>{f.desc}</p>
                    </Card>
                    </motion.div>
                </Col>
                ))}
            </Row>
            </section>
        </Content>
        </Layout>
    </>
  );
}

export default Home;
