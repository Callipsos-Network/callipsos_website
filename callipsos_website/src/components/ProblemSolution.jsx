import React from 'react'
import { AlarmClockCheck, Layers, RefreshCw } from 'lucide-react'

const ProblemSolution = () => {
    return (
        <div className="bg-black">
            {/* ============================================ */}
            {/* THE DREAM */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 relative">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(251,191,36,0.06) 0%, transparent 50%)' }}
                />
                <div className="max-w-4xl text-center relative z-10">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-8">The Future of DeFi</p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-stone-200">
                        Imagine an AI that
                        <br />
                        <span className="text-amber-200/80">manages your portfolio.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
                        It trades 24/7. Finds yield opportunities across protocols.
                        Rebalances when markets shift. Executes while you sleep.
                    </p>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHAT BECOMES POSSIBLE */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24">
                <div className="max-w-5xl mx-auto">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-16 text-center">What becomes possible</p>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: AlarmClockCheck,
                                title: 'Always-on trading',
                                desc: 'Your agent monitors markets around the clock, executing strategies while you live your life. No more watching charts at 3am.'
                            },
                            {
                                icon: Layers,
                                title: 'Cross-protocol yield',
                                desc: 'Agents that find the best rates across Aave, Compound, Sui DeFi, and move your assets automatically to maximize returns.'
                            },
                            {
                                icon: RefreshCw,
                                title: 'Smart rebalancing',
                                desc: 'Set your target allocation. Your agent maintains it through market swings—buying dips, taking profits, staying balanced.'
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl transition-all duration-300 hover:border-white/40"
                                style={{
                                    background: 'rgba(255, 254, 254, 0.07)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(2.8px)',
                                    WebkitBackdropFilter: 'blur(2.8px)',
                                    border: '1px solid rgba(255, 254, 254, 0.27)',
                                }}
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:border-amber-500/40 transition-colors">
                                    <item.icon className="w-5 h-5 text-amber-500/80" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-light mb-4 text-stone-200">{item.title}</h3>
                                <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE GAP */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 relative">
                <div className="max-w-4xl text-center relative z-10">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-8">The reality</p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-stone-200">
                        The tech exists.
                        <br />
                        <span className="text-stone-600">The trust doesn't.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Even crypto experts won't let AI agents touch their real money.
                        The risk of something going wrong is too high.
                    </p>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE REAL BLOCKER */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 py-24">
                <div className="max-w-4xl text-center">
                    <div className="mb-12">
                        <p className="text-2xl md:text-4xl font-light text-stone-300 leading-relaxed">
                            "I want AI to manage my DeFi.
                            <br />
                            <span className="text-stone-500">But I still can't trust agents with my money."</span>
                        </p>
                    </div>
                    <p className="text-stone-600 text-sm">— The sentiment holding back the entire industry</p>
                    <div
                        className="mt-16 p-8 rounded-2xl max-w-xl mx-auto"
                        style={{
                            background: 'rgba(255, 254, 254, 0.07)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(2.8px)',
                            WebkitBackdropFilter: 'blur(2.8px)',
                            border: '1px solid rgba(255, 254, 254, 0.27)',
                        }}
                    >
                        <p className="text-stone-500 leading-relaxed">
                            It's not that agents aren't smart enough.
                            <br /><br />
                            It's that when an agent gets compromised—through a bug, a hack,
                            a hallucination—there's nothing stopping it from draining everything.
                            <br /><br />
                            <span className="text-stone-400">The worst case is total loss.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE UNLOCK */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 relative">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 50%)' }}
                />
                <div className="max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-stone-200">
                        What if compromised
                        <br />
                        <span className="text-emerald-400/80">didn't mean catastrophe?</span>
                    </h2>
                </div>
            </section>

            {/* ============================================ */}
            {/* CALLIPSOS INTRODUCTION */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 py-24 relative">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 60%)' }}
                />
                <div className="max-w-4xl text-center relative z-10">
                    {/* Callipsos Logo */}
                    <div className="w-32 h-32 mx-auto mb-8">
                        <img
                            src="/logos/callipsos.svg"
                            alt="Callipsos logo"
                            className="w-full h-full object-contain opacity-70"
                        />
                    </div>
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-6">Introducing</p>
                    <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8 text-stone-200">Callipsos</h2>
                    <p className="text-xl md:text-2xl text-stone-400 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
                        The safety layer that makes AI agents trustworthy.
                    </p>
                    <p className="text-lg text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                        Set your boundaries. Let agents work within them.
                        Even if an agent is compromised, your rules hold.
                        <span className="text-emerald-400/80"> Your money stays safe.</span>
                    </p>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE KEY INSIGHT */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8">
                <div className="max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-stone-400">
                        Agents don't need full access.
                        <br />
                        <span className="text-white">They need bounded permissions.</span>
                    </h2>
                    <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-stone-500">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500/60 rounded-full" />
                            <span>Max transaction limits</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500/60 rounded-full" />
                            <span>Whitelisted tokens only</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500/60 rounded-full" />
                            <span>Approved actions only</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* HOW IT WORKS */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center px-8 py-24">
                <div className="max-w-4xl mx-auto w-full">
                    <p className="text-stone-600 text-sm tracking-widest uppercase mb-16 text-center">How it works</p>
                    <div className="space-y-4">
                        {[
                            {
                                num: '01',
                                title: 'You set the rules',
                                desc: 'Define what your agent can do: spending limits, allowed tokens, approved protocols. Your boundaries, your control.'
                            },
                            {
                                num: '02',
                                title: 'Agent requests action',
                                desc: "When your agent wants to execute a trade, it doesn't sign directly. It requests permission from Callipsos."
                            },
                            {
                                num: '03',
                                title: 'We validate & simulate',
                                desc: 'Every action is checked against your policies and simulated before execution. Bad transactions get blocked.'
                            },
                            {
                                num: '04',
                                title: 'Safe execution',
                                desc: 'Only validated actions get signed and executed on-chain. Everything is logged. Full transparency, full control.'
                            },
                        ].map((step) => (
                            <div
                                key={step.num}
                                className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 group hover:border-white/40"
                                style={{
                                    background: 'rgba(255, 254, 254, 0.05)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(2.8px)',
                                    WebkitBackdropFilter: 'blur(2.8px)',
                                    border: '1px solid rgba(255, 254, 254, 0.15)',
                                }}
                            >
                                <div className="text-2xl font-light text-stone-700 group-hover:text-emerald-500/70 transition-colors">
                                    {step.num}
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-stone-200 mb-2">{step.title}</h3>
                                    <p className="text-stone-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE PROMISE */}
            {/* ============================================ */}
            <section className="min-h-screen flex flex-col justify-center items-center px-8 relative">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)' }}
                />
                <div className="max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12 text-stone-200">
                        Let agents work.
                        <br />
                        <span className="text-emerald-400/80">Stay in control.</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-light text-white mb-2">24/7</p>
                            <p className="text-stone-600 text-sm">Autonomous operation</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-light text-white mb-2">100%</p>
                            <p className="text-stone-600 text-sm">Actions validated</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-light text-white mb-2">Your rules</p>
                            <p className="text-stone-600 text-sm">Always enforced</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProblemSolution