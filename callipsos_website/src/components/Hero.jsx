import React from 'react'
import Globe from './Globe'

// Delta Y style diagonal pattern (base64 SVG)
const diagonalPatternDark = `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgIDxwYXR0ZXJuIGlkPSJkaWFnb25hbCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjgiIGhlaWdodD0iOCI+CiAgICAgICAgPGxpbmUgeDE9IjAiIHkxPSI0IiB4Mj0iNCIgeTI9IjgiIHN0cm9rZT0iIzNmM2YzZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjQiIHkxPSIwIiB4Mj0iOCIgeTI9IjQiIHN0cm9rZT0iIzNmM2YzZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgIDwvcGF0dGVybj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwpIiAvPgogIDwvc3ZnPg==")`

const diagonalPatternLight = `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgIDxwYXR0ZXJuIGlkPSJkaWFnb25hbCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjgiIGhlaWdodD0iOCI+CiAgICAgICAgPGxpbmUgeDE9IjAiIHkxPSI0IiB4Mj0iNCIgeTI9IjgiIHN0cm9rZT0iIzUyNTI1MiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjQiIHkxPSIwIiB4Mj0iOCIgeTI9IjQiIHN0cm9rZT0iIzUyNTI1MiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgIDwvcGF0dGVybj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwpIiAvPgogIDwvc3ZnPg==")`

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen overflow-hidden bg-black">
            {/* Diagonal stripes - Left side */}
            <div className="absolute top-0 left-0 bottom-0 w-[1%] hidden md:flex z-10">
                <div className="relative flex h-full w-full">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: diagonalPatternDark,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '8px 8px',
                        }}
                    />
                    {/*<div*/}
                    {/*    className="absolute top-0 bottom-0 left-0 w-3 border-r border-l border-dashed border-zinc-900"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage: diagonalPatternLight,*/}
                    {/*        backgroundRepeat: 'repeat',*/}
                    {/*        backgroundSize: '8px 8px',*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<div*/}
                    {/*    className="absolute top-0 right-0 bottom-0 w-3 border-r border-l border-dashed border-zinc-900"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage: diagonalPatternLight,*/}
                    {/*        backgroundRepeat: 'repeat',*/}
                    {/*        backgroundSize: '8px 8px',*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>
            </div>

            {/* Diagonal stripes - Right side */}
            <div className="absolute top-0 right-0 bottom-0 w-[1%] hidden md:flex z-10">
                <div className="relative flex h-full w-full">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: diagonalPatternDark,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '8px 8px',
                        }}
                    />
                    {/*<div*/}
                    {/*    className="absolute top-0 bottom-0 left-0 w-3 border-r border-l border-dashed border-zinc-900"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage: diagonalPatternLight,*/}
                    {/*        backgroundRepeat: 'repeat',*/}
                    {/*        backgroundSize: '8px 8px',*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<div*/}
                    {/*    className="absolute top-0 right-0 bottom-0 w-3 border-r border-l border-dashed border-zinc-900"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage: diagonalPatternLight,*/}
                    {/*        backgroundRepeat: 'repeat',*/}
                    {/*        backgroundSize: '8px 8px',*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>
            </div>

            {/* Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[900px] max-h-[900px]">
                    <Globe />
                </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    {/* Status info - Left */}
                    <div className="font-mono text-stone-700 text-sm space-y-1">
                        <p>/// Callipsos</p>
                        <p>/// Safety layer for <span className="text-stone-400">Autonomous Agents</span></p>
                        <p>///</p>
                        <p>/// <span className="text-emerald-500">11 nodes active</span> across 6 regions</p>
                    </div>

                    {/* Callipsos wordmark - Right */}
                    <div className="flex items-end gap-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-400 tracking-tight">
                            Callipsos
                        </h1>
                    </div>
                </div>
            </div>

            {/* Top right - Status indicator */}
            <div className="absolute top-24 right-8 md:right-[18%] z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-stone-500 font-mono">Network Active</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                <span className="text-xs text-stone-600 font-mono">Scroll to explore</span>
                <div className="w-5 h-8 rounded-full border border-stone-700 flex items-start justify-center p-1">
                    <div className="w-1 h-2 bg-stone-500 rounded-full animate-bounce" />
                </div>
            </div>

            {/* Vignette overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-5"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
                }}
            />
        </section>
    )
}

export default Hero

// ============================================TODO: Fix GSAP animation fro scrolling later========================================================================

// import React, { useRef, useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Globe from './Globe'
//
// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger)
//
// // Delta Y style diagonal pattern (base64 SVG)
// const diagonalPatternDark = `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgIDxwYXR0ZXJuIGlkPSJkaWFnb25hbCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjgiIGhlaWdodD0iOCI+CiAgICAgICAgPGxpbmUgeDE9IjAiIHkxPSI0IiB4Mj0iNCIgeTI9IjgiIHN0cm9rZT0iIzNmM2YzZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjQiIHkxPSIwIiB4Mj0iOCIgeTI9IjQiIHN0cm9rZT0iIzNmM2YzZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIC8+CiAgICAgIDwvcGF0dGVybj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwpIiAvPgogIDwvc3ZnPg==")`
//
// const Hero = () => {
//     // Refs for DOM elements
//     const sectionRef = useRef(null)
//     const globeContainerRef = useRef(null)
//     const contentRef = useRef(null)
//     const statusRef = useRef(null)
//     const scrollIndicatorRef = useRef(null)
//
//     // Ref for the Globe component (to access Three.js animation controls)
//     const globeRef = useRef(null)
//
//     // Ref to store animation values for GSAP tweening
//     const animationValues = useRef({ scale: 1, opacity: 1 })
//
//     useEffect(() => {
//         const section = sectionRef.current
//         const globeContainer = globeContainerRef.current
//         const content = contentRef.current
//         const status = statusRef.current
//         const scrollIndicator = scrollIndicatorRef.current
//
//         if (!section || !globeContainer || !content) return
//
//         // Create a proxy object for GSAP to tween
//         // This avoids React re-renders - we update refs directly
//         const animProxy = { scale: 1, opacity: 1 }
//
//         // Create the scroll-triggered animation
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: 'top top',
//                 end: '+=50%', // Scroll distance for the animation (50% of viewport)
//                 scrub: 0.5, // Smooth scrubbing
//                 pin: true, // Pin the hero section during animation
//                 pinSpacing: true, // Add spacing for pinned element
//                 anticipatePin: 1, // Reduce jank on pin
//                 onUpdate: (self) => {
//                     // Update Three.js globe via refs (no React re-render)
//                     if (globeRef.current) {
//                         globeRef.current.setScale(animProxy.scale)
//                         globeRef.current.setOpacity(animProxy.opacity)
//                     }
//                 },
//             },
//         })
//
//         // Animation sequence
//         tl.to(animProxy, {
//             // scale: 1.8, // Scale up the globe
//             opacity: 0, // Fade out
//             duration: 1,
//             ease: 'power2.inOut',
//         }, 0)
//
//         // Fade out the globe container (for any CSS effects)
//         tl.to(globeContainer, {
//             scale: 1.8,
//             opacity: 0,
//             transformOrigin: "50% 50%",
//             force3D: true,
//             ease: "power2.inOut",
//             duration: 1,
//         }, 0)
//         // Fade out hero content
//         tl.to(content, {
//             opacity: 0,
//             y: -30,
//             duration: 0.8,
//             ease: 'power2.inOut',
//         }, 0)
//
//         // Fade out status indicator
//         tl.to(status, {
//             opacity: 0,
//             duration: 0.6,
//             ease: 'power2.inOut',
//         }, 0)
//
//         // Fade out scroll indicator early
//         tl.to(scrollIndicator, {
//             opacity: 0,
//             duration: 0.4,
//             ease: 'power2.out',
//         }, 0)
//
//         // Cleanup
//         return () => {
//             tl.kill()
//             ScrollTrigger.getAll().forEach(st => st.kill())
//         }
//     }, [])
//
//     return (
//         <section
//             ref={sectionRef}
//             id="hero"
//             className="relative h-screen bg-black overflow-visible"
//             // Removed overflow-hidden to prevent clipping during scale
//         >
//             {/* Diagonal stripes - Left side */}
//             <div className="absolute top-0 left-0 bottom-0 w-[1%] hidden md:flex z-10">
//                 <div className="relative flex h-full w-full">
//                     <div
//                         className="absolute inset-0"
//                         style={{
//                             backgroundImage: diagonalPatternDark,
//                             backgroundRepeat: 'repeat',
//                             backgroundSize: '8px 8px',
//                         }}
//                     />
//                 </div>
//             </div>
//
//             {/* Diagonal stripes - Right side */}
//             <div className="absolute top-0 right-0 bottom-0 w-[1%] hidden md:flex z-10">
//                 <div className="relative flex h-full w-full">
//                     <div
//                         className="absolute inset-0"
//                         style={{
//                             backgroundImage: diagonalPatternDark,
//                             backgroundRepeat: 'repeat',
//                             backgroundSize: '8px 8px',
//                         }}
//                     />
//                 </div>
//             </div>
//
//             {/* Globe - with ref for animation control */}
//             <div
//                 ref={globeContainerRef}
//                 className="absolute inset-0 flex items-center justify-center"
//             >
//                 <div className="w-[min(900px,90vh)] h-[min(900px,90vh)]">
//                     <Globe ref={globeRef} />
//                 </div>
//             </div>
//
//             {/* Bottom content */}
//             <div
//                 ref={contentRef}
//                 className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20"
//             >
//                 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
//                     {/* Status info - Left */}
//                     <div className="font-mono text-stone-700 text-sm space-y-1">
//                         <p>/// Callipsos</p>
//                         <p>/// Safety layer for <span className="text-stone-400">Autonomous Agents</span></p>
//                         <p>///</p>
//                         <p>/// <span className="text-emerald-500">11 nodes active</span> across 6 regions</p>
//                     </div>
//
//                     {/* Callipsos wordmark - Right */}
//                     <div className="flex items-end gap-4">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-400 tracking-tight">
//                             Callipsos
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Top right - Status indicator */}
//             <div ref={statusRef} className="absolute top-24 right-8 md:right-[18%] z-20">
//                 <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                     <span className="text-xs text-stone-500 font-mono">Network Active</span>
//                 </div>
//             </div>
//
//             {/* Scroll indicator */}
//             <div
//                 ref={scrollIndicatorRef}
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
//             >
//                 <span className="text-xs text-stone-600 font-mono">Scroll to explore</span>
//                 <div className="w-5 h-8 rounded-full border border-stone-700 flex items-start justify-center p-1">
//                     <div className="w-1 h-2 bg-stone-500 rounded-full animate-bounce" />
//                 </div>
//             </div>
//
//             {/* Vignette overlay */}
//             <div
//                 className="absolute inset-0 pointer-events-none z-5"
//                 style={{
//                     background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
//                 }}
//             />
//         </section>
//     )
// }
//
// export default Hero