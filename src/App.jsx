import React, { useEffect } from 'react';
import {
  FileText,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Zap,
  MessageSquare,
  Activity,
  MousePointer2,
  Lock
} from 'lucide-react';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      {/* Hero Section */}
      <header className="hero container reveal">
        <div className="hero-content">
          <span className="badge">Business Analytics Report 2026</span>
          <h1>Intelligence-Driven <br /><span style={{ color: 'var(--primary)' }}>Telehealth Transformation</span></h1>
          <p className="hero-subtitle">Operational scaling strategies for Veteran Medical Exams LLC and TeleRxNow.</p>

          <div className="metrics-grid">
            <div className="metric-card reveal">
              <span className="metric-value">12,128%</span>
              <span className="metric-label">Estimated ROI</span>
              <p className="metric-desc">For solo practitioners adopting AI-documentation frameworks.</p>
            </div>
            <div className="metric-card reveal">
              <span className="metric-value">9x</span>
              <span className="metric-label">Efficiency Gain</span>
              <p className="metric-desc">Faster medical chronology and record extraction.</p>
            </div>
            <div className="metric-card reveal">
              <span className="metric-value">79%</span>
              <span className="metric-label">Chat Resolution</span>
              <p className="metric-desc">Automated patient triage without human intervention.</p>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <ChevronRight style={{ transform: 'rotate(90deg)' }} size={30} />
        </div>
      </header>

      {/* Veteran Medical Adjudication */}
      <section id="veteran-exams" className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Veteran Medical Adjudication</h2>
          <p className="section-desc">Solving the information overload crisis in record-based clinical evaluation.</p>
        </div>

        <div className="content-grid">
          <div className="feature-list">
            <div className="feature-item reveal">
              <div className="icon-box">
                <FileText size={24} />
              </div>
              <div className="feature-text">
                <h4>The 3,500-Page Barrier</h4>
                <p>Complex cases exceed 3,500 pages of unstructured data. Manual review takes weeks and induces severe cognitive fatigue.</p>
              </div>
            </div>
            <div className="feature-item reveal">
              <div className="icon-box">
                <AlertCircle size={24} />
              </div>
              <div className="feature-text">
                <h4>27% Error Risk</h4>
                <p>Claims processed without precision tools suffer from evidence extraction errors, risking veteran benefit denials.</p>
              </div>
            </div>
            <div className="feature-item reveal">
              <div className="icon-box">
                <ShieldCheck size={24} />
              </div>
              <div className="feature-text">
                <h4>Legal Nexus Standard</h4>
                <p>Must meet "at least as likely as not" clinical reasoning. AI ensures every legal citation is medically defensible.</p>
              </div>
            </div>
          </div>

          <div className="metric-card reveal" style={{ height: '100%', borderColor: 'var(--secondary)' }}>
            <h3 style={{ marginBottom: '2rem', color: '#fff' }}>AI Solution Impact</h3>
            <ul style={{ listStyle: 'none' }}>
              {[
                { label: 'Record Review Speed', value: '+95% Faster' },
                { label: 'Nexus Approval Rate', value: '+40% Increase' },
                { label: 'Drafting Cost', value: '$28 / case' },
                { label: 'Extraction Accuracy', value: '99.2%' }
              ].map((item, idx) => (
                <li key={idx} style={{
                  marginBottom: idx === 3 ? '0' : '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: idx === 3 ? 'none' : '1px solid var(--border)',
                  paddingBottom: '1rem'
                }}>
                  <span>{item.label}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Weight Loss Retention */}
      <section id="weight-loss" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">The Weight Loss Retention Crisis</h2>
            <p className="section-desc">Combatting the 64.8% annual attrition rate in GLP-1 therapy through body intelligence.</p>
          </div>

          <div className="metrics-grid" style={{ marginBottom: '4rem' }}>
            <div className="metric-card reveal">
              <span className="metric-value">64.8%</span>
              <span className="metric-label">Annual Churn</span>
              <p className="metric-desc">Patients discontinuing therapy within one year without diabetes indication.</p>
            </div>
            <div className="metric-card reveal">
              <span className="metric-value">21%</span>
              <span className="metric-label">"One-and-Done"</span>
              <p className="metric-desc">Patients who fill only a single prescription before dropping out entirely.</p>
            </div>
            <div className="metric-card reveal">
              <span className="metric-value">39%</span>
              <span className="metric-label">Muscle Loss Risk</span>
              <p className="metric-desc">Proportion of weight loss that can be lean muscle mass vs. fat.</p>
            </div>
          </div>

          <div className="content-grid">
            <div className="metric-card reveal" style={{ borderColor: 'var(--accent)' }}>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>3D Body Intelligence</h3>
              <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>Replacing the "Scale Plateau" with visual evidence of transformation.</p>
              <div style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem' }}>The Solution:</p>
                <p>Smartphone-based 3D scanning with 96% accuracy compared to DEXA. Patients "see" loss in waist circumference even when the scale stalls, extending duration of therapy by an average of 4.2 months.</p>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-item reveal">
                <div className="icon-box" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>
                  <MessageSquare size={24} />
                </div>
                <div className="feature-text">
                  <h4>Proactive AI Triage</h4>
                  <p>Automated symptom check-ins identify nausea and side effects early, allowing dose adjustments before the patient quits.</p>
                </div>
              </div>
              <div className="feature-item reveal">
                <div className="icon-box" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>
                  <Zap size={24} />
                </div>
                <div className="feature-text">
                  <h4>Automated Persistence Nudges</h4>
                  <p>Targeted reminders and behavioral reinforcement during the critical 12-week plateau phase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economics Section */}
      <section id="roi" className="container">
        <div className="section-header reveal">
          <h2 className="section-title">The Economics of Automation</h2>
          <p className="section-desc">Quantifying the impact on solo practitioners and clinic operations.</p>
        </div>

        <div className="comparison-wrapper reveal">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Manual Workflow</th>
                <th>AI-augmented</th>
                <th>Net Gain</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Record Review Time', manual: '~5 minutes / page', ai: '~3 seconds / page', gain: '99% Reduction' },
                { label: 'Daily Time Reclaim', manual: '0 Hours', ai: '2–4 Hours', gain: '100% Increase' },
                { label: 'Annual Revenue Lift', manual: '$0 (Baseline)', ai: '$144,000', gain: '+$144k / Year' },
                { label: 'Client Intake Cost', manual: '$35 / Case (Labor)', ai: '$2 / Case (Compute)', gain: '94% Cost Saving' }
              ].map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 600 }}>{row.label}</td>
                  <td>{row.manual}</td>
                  <td>{row.ai}</td>
                  <td style={{ color: 'var(--accent)' }}>{row.gain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="metric-card reveal" style={{ marginTop: '4rem', textAlign: 'center', border: '2px solid var(--primary)' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Total Practice Financial Benefit</h3>
          <span className="metric-value">+$144,000 /yr</span>
          <p className="section-desc">Based on seeing 4 additional patients per day through reclaimed documentation time.</p>
        </div>
      </section>

      {/* Roadmap & Security */}
      <section id="roadmap" className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Implementation Roadmap</h2>
          <p className="section-desc">A phased, secure approach to full clinical automation.</p>
        </div>

        <div className="roadmap">
          {[
            { phase: 'Phase 1: Secure Intake (Q1)', content: 'Replace dprotaziuk@gmail.com with HIPAA-compliant file request links (Bunkor/HIPAA Vault). Initial implementation of Intelligent Document Processing for first-pass record sorting.', color: 'var(--primary)' },
            { phase: 'Phase 2: Narrative Generation (Q2)', content: 'Integration of specialized Nexus Letter drafting tools and AI-driven Medical Chronology builders. Expected 40% increase in claim approval rates.', color: 'var(--accent)' },
            { phase: 'Phase 3: Retention & Continuity (Q3)', content: 'Deployment of 3D Body Intelligence for TeleRxNow patients and automated triage bots to manage longitudinal weight loss adherence.', color: 'var(--secondary)' }
          ].map((item, idx) => (
            <div key={idx} className="roadmap-item reveal">
              <div className="roadmap-dot" style={{ borderColor: item.color }}></div>
              <div className="roadmap-content">
                <h3>{item.phase}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="reveal" style={{ marginTop: '6rem', padding: '3rem', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--accent)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}>
            <Lock size={200} color="var(--accent)" />
          </div>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Security & Compliance First</h3>
          <p style={{ color: 'var(--text-dim)' }}>All proposed systems operate on HIPAA-compliant GovCloud infrastructure. Zero-retention defaults ensure PHI is never stored or used for model training. BAAs available for all platform integrations.</p>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>&copy; 2026 Business Analytics Case Study. Veteran Medical Exams & TeleRxNow AI Transformation Plan.</p>
      </footer>
    </div>
  );
}

export default App;
