import React , { useEffect, useRef } from 'react'
import { paths } from './currentPath'

export default function Circuit1({timeline}) {
    const pathsArr = useRef([])

    useEffect(() => {
        pathsArr.current.forEach((el) => {
            if(el.hasAttribute('data-placeholder')){
                el.style.strokeDashoffset = el.getTotalLength()
                el.style.strokeDasharray = 0
                el.style.stroke = '#501b57'
                return
            }
            el.style.strokeDashoffset = 0
            el.style.strokeDasharray = el.getTotalLength()
            
            timeline.from(el, {
                duration: 3,
                strokeDashoffset: el.getTotalLength(),
                ease: 'linear',
                scrollTrigger: {
                    trigger: el,
                    start: "top 100%",
                    end: 'bottom 90%',
                    scrub: 1,
                    pinSpacing: false,
                    toggleActions: 'restart complete reverse reset',
                }
            })
        })
    }, [timeline])

    const addRefs = (element) => {
        if(element && !pathsArr.current.includes(element)){
            pathsArr.current.push(element)
        }
    }

    return (
        <div className="svg_mesh_container">
            {/* <svg className="meshCircuit" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-388 -40 2200 2122"> */}
            <svg className="meshCircuit1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-300 -110 1800 1600">
                <g className="set2">
                    {paths.map((path, i) =>{
                        return (
                            <path fill="none" key={i} data-placeholder={1 + 20} d={path.path} ref={addRefs}></path>
                        )
                    })}
                </g>
                <g className="set1">
                    {paths.map((path, i) =>{
                        return (
                            <path fill="none" key={i} id={`path-${i+1}`} d={path.path} ref={addRefs}></path>
                        )
                    })}
                </g>
            </svg>
        </div>
    )
}   
