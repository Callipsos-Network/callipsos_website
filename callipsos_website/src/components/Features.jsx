import React from 'react'
import { Shield, Play, AlertTriangle, FileText, Zap, Clock, CheckCircle2, XCircle } from 'lucide-react'

const Features = () => {
    return (
        <div className="bg-black">
            {/* ============================================ */}
            {/* FEATURES HEADER */}
            {/* ============================================ */}
            <section id="features" className="min-h-screen flex flex-col justify-center items-center px-8 py-24">
                <div className="max-w-4xl text-center">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-8">Features</p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-stone-200">
                        Four layers of
                        <br />
                        <span className="text-stone-400">protection.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-stone-500 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                        Every transaction passes through multiple checkpoints
                        before it ever touches the blockchain.
                    </p>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-stone-800 rounded-full bg-stone-950/50">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-stone-400 text-sm">
                            All four checks in under <span className="text-white font-medium">200ms</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FEATURE 1: YOUR RULES (Policy Engine) */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)' }}
                />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-blue-400/70 text-sm font-mono">01</span>
                                <div className="h-px w-8 bg-blue-400/30" />
                                <Shield className="w-5 h-5 text-blue-400/50" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-light mb-6 text-stone-200">Your Rules</h3>
                            <p className="text-lg text-stone-400 leading-relaxed mb-8">
                                Define exactly what your agent can and can't do.
                                Set spending limits, whitelist tokens, approve specific actions.
                                Your boundaries are enforced cryptographically—not by trust.
                            </p>
                            <ul className="space-y-4 text-stone-500">
                                {[
                                    'Maximum transaction amounts',
                                    'Whitelisted tokens and protocols',
                                    'Time-based restrictions',
                                    'Custom conditions you define'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-full mt-2.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Code Block */}
                        <div
                            className="rounded-2xl p-6 md:p-8 font-mono text-sm"
                            style={{
                                background: 'rgba(255, 254, 254, 0.03)',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(2.8px)',
                                WebkitBackdropFilter: 'blur(2.8px)',
                                border: '1px solid rgba(255, 254, 254, 0.1)',
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-stone-800" />
                                <div className="w-3 h-3 rounded-full bg-stone-800" />
                                <div className="w-3 h-3 rounded-full bg-stone-800" />
                                <span className="ml-2 text-stone-600 text-xs">policy.json</span>
                            </div>
                            <div className="text-stone-600 mb-4">// Your policy</div>
                            <div className="space-y-2 text-stone-400">
                                <div><span className="text-blue-400">max_transaction</span>: <span className="text-stone-300">1000 USDC</span></div>
                                <div><span className="text-blue-400">daily_limit</span>: <span className="text-stone-300">5000 USDC</span></div>
                                <div><span className="text-blue-400">allowed_tokens</span>: <span className="text-stone-300">[USDC, ETH, SUI]</span></div>
                                <div><span className="text-blue-400">allowed_actions</span>: <span className="text-stone-300">[swap, stake]</span></div>
                                <div><span className="text-blue-400">blocked_actions</span>: <span className="text-stone-500">[bridge, withdraw_all]</span></div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-stone-800/50 text-stone-600 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400/70" strokeWidth={1.5} />
                                <span>Agent cannot exceed these limits</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FEATURE 2: SAFE PREVIEW (Simulation) */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.08) 0%, transparent 50%)' }}
                />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        {/* Left: Simulation Result Card */}
                        <div
                            className="order-2 md:order-1 rounded-2xl p-6 md:p-8"
                            style={{
                                background: 'rgba(255, 254, 254, 0.03)',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(2.8px)',
                                WebkitBackdropFilter: 'blur(2.8px)',
                                border: '1px solid rgba(255, 254, 254, 0.1)',
                            }}
                        >
                            <div className="text-stone-600 text-sm mb-6 font-mono flex items-center gap-2">
                                <Play className="w-4 h-4 text-purple-400/60" strokeWidth={1.5} />
                                // Simulation result
                            </div>
                            <div className="space-y-3">
                                {[
                                    { label: 'Action', value: 'Swap 500 USDC → ETH', color: 'text-stone-300' },
                                    { label: 'Expected output', value: '0.147 ETH', color: 'text-stone-300' },
                                    { label: 'Slippage', value: '0.3%', color: 'text-emerald-400/80' },
                                    { label: 'Gas estimate', value: '$2.40', color: 'text-stone-300' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-3 bg-stone-900/30 rounded-lg border border-stone-800/30"
                                    >
                                        <span className="text-stone-500 text-sm">{item.label}</span>
                                        <span className={`${item.color} text-sm font-medium`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-stone-800/50 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400/70" strokeWidth={1.5} />
                                <span className="text-stone-500 text-sm">Safe to execute</span>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="order-1 md:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-purple-400/70 text-sm font-mono">02</span>
                                <div className="h-px w-8 bg-purple-400/30" />
                                <Play className="w-5 h-5 text-purple-400/50" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-light mb-6 text-stone-200">Safe Preview</h3>
                            <p className="text-lg text-stone-400 leading-relaxed mb-8">
                                Every transaction is simulated before execution.
                                See exactly what will happen—token balances, gas costs,
                                potential failures—before anything is final.
                            </p>
                            <ul className="space-y-4 text-stone-500">
                                {[
                                    'Fork chain state for accurate testing',
                                    'Catch failures before they happen',
                                    'Verify expected outcomes match reality'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full mt-2.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* MID-SECTION CTA */}
            {/* ============================================ */}
            <section className="py-24 px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-stone-500 mb-6">Be the first to build with Callipsos</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="flex-1 px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-stone-600 transition-colors"
                        />
                        <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors whitespace-nowrap">
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FEATURE 3: ERROR CATCHER (Hallucination Detection) */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(251,146,60,0.08) 0%, transparent 50%)' }}
                />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-orange-400/70 text-sm font-mono">03</span>
                                <div className="h-px w-8 bg-orange-400/30" />
                                <AlertTriangle className="w-5 h-5 text-orange-400/50" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-light mb-6 text-stone-200">Error Catcher</h3>
                            <p className="text-lg text-stone-400 leading-relaxed mb-4">
                                AI makes mistakes. LLMs hallucinate. That's reality.
                            </p>
                            <p className="text-lg text-stone-400 leading-relaxed mb-8">
                                We go deeper than surface checks. Callipsos inspects raw calldata—detecting
                                unrecognized token addresses, suspicious function calls, and known attack
                                patterns before they execute.
                            </p>
                            <ul className="space-y-4 text-stone-500 mb-8">
                                {[
                                    'Calldata-level inspection',
                                    'Unverified token detection',
                                    'Known attack pattern matching',
                                    'Hidden approval detection'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-orange-400/60 rounded-full mt-2.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div
                                className="p-4 rounded-xl"
                                style={{
                                    background: 'rgba(255, 254, 254, 0.03)',
                                    border: '1px solid rgba(255, 254, 254, 0.1)',
                                }}
                            >
                                <p className="text-stone-500 text-sm">
                                    <span className="text-orange-400/80">For developers:</span> Focus on making your agent smart. We handle the security so you don't have to.
                                </p>
                            </div>
                        </div>

                        {/* Right: Calldata Inspection */}
                        <div
                            className="rounded-2xl p-6 font-mono text-xs"
                            style={{
                                background: 'rgba(255, 254, 254, 0.03)',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(2.8px)',
                                WebkitBackdropFilter: 'blur(2.8px)',
                                border: '1px solid rgba(255, 254, 254, 0.1)',
                            }}
                        >
                            <div className="text-stone-600 mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-3.5 h-3.5 text-orange-400/60" strokeWidth={1.5} />
                                // Calldata inspection
                            </div>
                            <div className="text-stone-500 mb-4 break-all bg-stone-900/30 p-2 rounded border border-stone-800/30">
                                <span className="text-stone-700">Raw:</span> 0xa9059cbb000000000000000000000000<span className="text-orange-400/70">7a3f</span>...
                            </div>
                            <div className="space-y-3 text-stone-400">
                                <div className="flex items-start gap-2">
                                    <span className="text-stone-600">├─</span>
                                    <div className="flex-1">
                                        <span className="text-stone-500">Function:</span> transfer(address,uint256)
                                        <div className="text-emerald-400/60 text-xs mt-1 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />
                                            Known function signature
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-stone-600">├─</span>
                                    <div className="flex-1">
                                        <span className="text-stone-500">To:</span> 0x7a3f...8c2d
                                        <div className="text-red-400/70 text-xs mt-1 flex items-center gap-1">
                                            <XCircle className="w-3 h-3" strokeWidth={1.5} />
                                            Unknown token - not in registry
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-stone-600">├─</span>
                                    <div className="flex-1">
                                        <span className="text-stone-500">Amount:</span> 1000000000000000000
                                        <div className="text-emerald-400/60 text-xs mt-1 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />
                                            Valid uint256
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-stone-600">└─</span>
                                    <div className="flex-1">
                                        <span className="text-stone-500">Pattern check:</span>
                                        <div className="text-red-400/70 text-xs mt-1 flex items-center gap-1">
                                            <XCircle className="w-3 h-3" strokeWidth={1.5} />
                                            Matches known drainer signature
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-stone-800/50">
                                <div className="flex items-center gap-2 text-red-400/80 text-sm">
                                    <XCircle className="w-4 h-4" strokeWidth={1.5} />
                                    <span>BLOCKED: Unrecognized token + suspicious pattern</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FEATURE 4: FULL TRANSPARENCY (Audit Trail) */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(16,185,129,0.08) 0%, transparent 50%)' }}
                />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        {/* Left: Audit Log */}
                        <div
                            className="order-2 md:order-1 rounded-2xl p-6 font-mono text-xs"
                            style={{
                                background: 'rgba(255, 254, 254, 0.03)',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(2.8px)',
                                WebkitBackdropFilter: 'blur(2.8px)',
                                border: '1px solid rgba(255, 254, 254, 0.1)',
                            }}
                        >
                            <div className="text-stone-600 mb-4 flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5 text-emerald-400/60" strokeWidth={1.5} />
                                // Audit log
                            </div>
                            <div className="space-y-2 text-stone-500">
                                {[
                                    { time: '14:23:01', status: 'success', msg: 'Policy check passed' },
                                    { time: '14:23:01', status: 'success', msg: 'Simulation successful' },
                                    { time: '14:23:02', status: 'success', msg: 'Hallucination check passed' },
                                    { time: '14:23:02', status: 'success', msg: 'Capability token issued' },
                                    { time: '14:23:03', status: 'success', msg: 'Transaction signed' },
                                    { time: '14:23:05', status: 'success', msg: 'Execution confirmed' },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-4 p-2 rounded bg-stone-900/20 border border-stone-800/20">
                                        <span className="text-stone-700 shrink-0">{log.time}</span>
                                        <span className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-400/70 shrink-0" strokeWidth={1.5} />
                                            {log.msg}
                                        </span>
                                    </div>
                                ))}
                                <div className="flex gap-4 pt-3 mt-3 border-t border-stone-800/50">
                                    <span className="text-stone-700">tx_hash</span>
                                    <span className="text-emerald-400/60">0x7a3f...8c2d</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="order-1 md:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-emerald-400/70 text-sm font-mono">04</span>
                                <div className="h-px w-8 bg-emerald-400/30" />
                                <FileText className="w-5 h-5 text-emerald-400/50" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-light mb-6 text-stone-200">Full Transparency</h3>
                            <p className="text-lg text-stone-400 leading-relaxed mb-8">
                                Every action is logged immutably. Every decision recorded.
                                Know exactly what your agent did, when, and why it was allowed.
                            </p>
                            <ul className="space-y-4 text-stone-500">
                                {[
                                    'Complete audit trail on-chain',
                                    'Every validation step recorded',
                                    'Verifiable by anyone, anytime'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full mt-2.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* PERFORMANCE STATS */}
            {/* ============================================ */}
            <section className="py-24 px-8 border-y border-stone-900">
                <div className="max-w-5xl mx-auto">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-12 text-center">
                        Security at the speed of execution
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, value: '<200ms', label: 'Total validation time' },
                            { icon: Clock, value: '10,000', label: 'Signatures per second' },
                            { icon: Shield, value: '4', label: 'Parallel security checks' },
                            { icon: CheckCircle2, value: '0', label: 'Missed opportunities' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="flex justify-center mb-4">
                                    <stat.icon
                                        className="w-6 h-6 text-stone-700 group-hover:text-emerald-400/60 transition-colors"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</p>
                                <p className="text-stone-600 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-stone-700 text-sm text-center mt-12">
                        Your agent doesn't wait. Your edge stays sharp.
                    </p>
                </div>
            </section>

            {/* ============================================ */}
            {/* FEATURES CTA */}
            {/* ============================================ */}
            <section className="py-32 px-8 relative">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 50%)' }}
                />
                <div className="max-w-2xl mx-auto text-center relative z-10">
                    <h3 className="text-3xl md:text-5xl font-light mb-6 text-stone-200">
                        Ready to build agents
                        <br />
                        <span className="text-emerald-400/80">people can trust?</span>
                    </h3>
                    <p className="text-stone-500 mb-8">Get early access to the Callipsos SDK</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="flex-1 px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:outline-none focus:border-stone-600 transition-colors"
                        />
                        <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors whitespace-nowrap">
                            Join Waitlist
                        </button>
                    </div>
                    <p className="text-stone-700 text-sm mt-6">Launching Q1 2025</p>
                </div>
            </section>
        </div>
    )
}

export default Features