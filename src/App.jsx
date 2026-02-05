import React from 'react';
import {
  FileText,
  AlertCircle,
  ShieldCheck,
  TrendingUp,
  Zap,
  MessageSquare,
  Activity,
  Lock,
  ArrowRight
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <span className="badge">Internal Business Analysis</span>
          <h1>Strategic AI Implementation Plan</h1>
          <p className="hero-subtitle">Operational efficiency and growth strategies for Veteran Medical Exams LLC and TeleRxNow.</p>

          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-value">12,128%</span>
              <span className="metric-label">ROI Impact</span>
              <p className="metric-desc">Projected ROI for clinical documentation automation.</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">95%</span>
              <span className="metric-label">Time Saved</span>
              <p className="metric-desc">Reduction in manual record review time.</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">$144k</span>
              <span className="metric-label">Annual Lift</span>
              <p className="metric-desc">Potential revenue increase from reclaimed hours.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Deep Dive 1 */}
      <section id="veteran-exams">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Veteran Medical Adjudication</h2>
            <p className="section-desc">Automating the analysis of complex disability benefit records.</p>
          </div>

          <div className="content-grid">
            <div className="feature-list">
              <div className="feature-item">
                <div className="icon-box">
                  <FileText size={20} />
                </div>
                <div className="feature-text">
                  <h4>Information Overload</h4>
                  <p>Processing 3,500+ pages manually is the primary bottleneck for Nexus establishment.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-box">
                  <AlertCircle size={20} />
                </div>
                <div className="feature-text">
                  <h4>Extraction Errors</h4>
                  <p>27% error rate in manual evidence extraction leads to avoidable claim denials.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="feature-text">
                  <h4>Nexus Compliance</h4>
                  <p>AI ensures "at least as likely as not" standards are consistently met and cited.</p>
                </div>
              </div>
            </div>

            <div className="metric-card" style={{ background: '#f8fafc', border: 'none' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>AI Success Metrics</h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  { label: 'Review Speed', value: '4 mins vs 4 days', icon: <ArrowRight size={14} /> },
                  { label: 'Approval Lift', value: '+40% Avg', icon: <ArrowRight size={14} /> },
                  { label: 'Cost Per Case', value: '$28.00', icon: <ArrowRight size={14} /> },
                  { label: 'Data Accuracy', value: '99.2%', icon: <ArrowRight size={14} /> }
                ].map((item, idx) => (
                  <li key={idx} style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.label}</span>
                    <span style={{ fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2 */}
      <section id="weight-loss">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Patient Retention System</h2>
            <p className="section-desc">Solving the 64.8% annual attrition rate in GLP-1 therapy.</p>
          </div>

          <div className="metrics-grid" style={{ marginBottom: '4rem' }}>
            <div className="metric-card">
              <span className="metric-value">21%</span>
              <span className="metric-label">Drop-out Rate</span>
              <p className="metric-desc">Patients who fill only a single prescription before quit.</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">39%</span>
              <span className="metric-label">Muscle Loss</span>
              <p className="metric-desc">Clinical risk of rapid weight loss without monitoring.</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">4.2mo</span>
              <span className="metric-label">Extended Persistence</span>
              <p className="metric-desc">Avg increase in therapy duration with 3D monitoring.</p>
            </div>
          </div>

          <div className="content-grid">
            <div className="feature-list">
              <div className="feature-item">
                <div className="icon-box">
                  <Activity size={20} />
                </div>
                <div className="feature-text">
                  <h4>3D Body Intelligence</h4>
                  <p>Visualizing progress through smartphone scanning to overcome scale plateaus.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-box">
                  <MessageSquare size={20} />
                </div>
                <div className="feature-text">
                  <h4>Conversational Triage</h4>
                  <p>79% of routine symptom queries resolved by AI without provider intervention.</p>
                </div>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <div className="icon-box">
                  <Zap size={20} />
                </div>
                <div className="feature-text">
                  <h4>Persistence Nudges</h4>
                  <p>Automated behavioral reinforcement during the critical 12-week titration.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-box">
                  <Lock size={20} />
                </div>
                <div className="feature-text">
                  <h4>GovCloud Security</h4>
                  <p>HIPAA-compliant infrastructure with zero PHI data retention defaults.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Next Steps</h2>
            <p className="section-desc">Phased implementation roadmap for the next three quarters.</p>
          </div>

          <div className="roadmap">
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <h3>Phase 1: Record Infrastructure</h3>
                <p>Deploy secure file request portals and automated IDP triage for veteran records.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <h3>Phase 2: Narrative Generation</h3>
                <p>Integrate specialized LLM drafting for Nexus letters and DBQ validation.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <h3>Phase 3: Longitudinal Care</h3>
                <p>Launch 3D body intelligence and automated triage for the weight loss clinic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 AI Transformation Report. Confidential Analysis.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
