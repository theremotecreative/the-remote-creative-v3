import * as React from "react"
import styled from "styled-components"

import ParticleBG from "./hero-bg"
import HeroAnimation from "./hero-animation"

const HeroSection = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        project: "",
    })
    const [status, setStatus] = React.useState("idle")
    const [errorMessage, setErrorMessage] = React.useState("")

    const webhookUrl = process.env.GATSBY_N8N_WEBHOOK_URL

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus("submitting")
        setErrorMessage("")

        if (!webhookUrl) {
            setErrorMessage("Missing webhook configuration. Add GATSBY_N8N_WEBHOOK_URL to your environment.")
            setStatus("idle")
            return
        }

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    source: "hero-contact",
                }),
            })

            if (!response.ok) {
                throw new Error("Webhook request failed")
            }

            setStatus("success")
            setFormData({ name: "", email: "", project: "" })
        } catch (error) {
            setErrorMessage("We couldn't send your details right now. Please try again.")
            setStatus("error")
        }
    }

    return (
        <HeroMain id="hero_main_bg" className="one-bg-change">
            <ParticleBG />
            <div className="hero-inner">
                <div className="hero-content">
                    <h1>Senior Developers Supercharged with AI</h1>
                    <p>We combine years of engineering experience with cutting-edge artificial intelligence to build more.</p>
                </div>
                <div className="hero-form">
                    <HeroForm onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h2>Tell us about your project</h2>
                            <p>Share your email and a quick project summary and we will follow up with next steps.</p>
                        </div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                            required
                        />
                        <label htmlFor="project">Project details</label>
                        <textarea
                            id="project"
                            name="project"
                            placeholder="What problem can we help you solve?"
                            value={formData.project}
                            onChange={(event) => setFormData({ ...formData, project: event.target.value })}
                            rows="4"
                            required
                        />
                        <button type="submit" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Send to our team"}
                        </button>
                        {status === "success" && <p className="form-success">Thanks! We'll reach out shortly.</p>}
                        {errorMessage && <p className="form-error">{errorMessage}</p>}
                    </HeroForm>
                </div>
            </div>
            {/* <HeroAnimation/> */}
        </HeroMain>
    )
}

const HeroMain = styled.section`
    background: #030e3b;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    .hero-inner {
        position: relative;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
        z-index: 1;
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        grid-template-areas: "copy form";
        gap: 32px;
        align-items: center;
    }
    .hero-content {
        grid-area: copy;
        transition-duration: .5s;
        text-align: left;
        max-width: 600px;
        h1 {
            font-family: Roboto;
            font-weight: 900;
            font-size: 72px;
            line-height: 1.2;
            color: #fff;
            max-width: 960px;
            text-shadow: 2px 2px 4px rgba(0,0,0,.5);
            transform: translateZ(60px);
            transition-duration: .3s;
            &:hover {
                transform: translateZ(120px);
            }
        }
        p {
            font-family: Poppins;
            font-weight: 400;
            font-size: 36px;
            line-height: 1.3;
            max-width: 520px;
            margin: 12px 0 0 0;
            color: #fff;
            transform: translateZ(60px);
            text-shadow: 1px 1px 2px rgba(0,0,0,.5);
        }
    }
    .hero-form {
        grid-area: form;
        display: flex;
        justify-content: flex-end;
    }
    .hero-form ${HeroForm} {
        width: 100%;
        max-width: 520px;
    }
    @media(max-width:960px) {
        height: auto;
        padding: 80px 0;
        .hero-inner {
            grid-template-columns: 1fr;
            grid-template-areas:
                "copy"
                "form";
            text-align: center;
        }
        .hero-content {
            text-align: center;
            h1 {
                font-size: 56px;
            }
            p {
                margin: 12px auto 0 auto;
                font-size: 32px;
            }
        }
        .hero-form {
            justify-content: center;
        }
        .hero-form ${HeroForm} {
            max-width: 560px;
        }
    }
    @media(max-width:767px) {
        height: auto;
        padding: 80px 0;
        .hero-inner {
            grid-template-columns: 1fr;
            grid-template-areas:
                "copy"
                "form";
            text-align: center;
        }
        .hero-content {
            text-align: center;
            h1 {
                font-size: 36px;
            }
            p {
                margin: 12px auto 0 auto;
                font-size: 24px;
            }
        }
        .hero-form {
            justify-content: center;
        }
        .hero-form ${HeroForm} {
            max-width: 100%;
        }
    }

`

const HeroForm = styled.form`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    display: grid;
    gap: 12px;
    backdrop-filter: blur(4px);
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    .form-header {
        h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
        }
        p {
            margin: 6px 0 0;
            font-size: 16px;
            color: #dbe6ff;
        }
    }
    label {
        font-size: 14px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #a9b8ff;
    }
    input, textarea {
        width: 100%;
        padding: 12px 14px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(3, 14, 59, 0.8);
        color: #fff;
        font-size: 16px;
        transition: border-color .2s ease, box-shadow .2s ease;
        &:focus {
            border-color: #4f7cff;
            outline: none;
            box-shadow: 0 0 0 4px rgba(79, 124, 255, 0.2);
        }
    }
    textarea {
        resize: vertical;
        min-height: 120px;
    }
    button {
        margin-top: 8px;
        padding: 14px 16px;
        background: linear-gradient(90deg, #4f7cff, #8e9cff);
        border: none;
        border-radius: 12px;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: transform .2s ease, box-shadow .2s ease;
        &:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(79, 124, 255, 0.35);
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }
    }
    .form-success {
        color: #a7ffce;
        font-weight: 600;
        margin: 0;
    }
    .form-error {
        color: #ffb4c2;
        font-weight: 600;
        margin: 0;
    }
`

export default HeroSection
