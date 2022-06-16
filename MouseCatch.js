import React, { useRef } from 'react';
import styled from "styled-components";
import gsap from 'gsap';

const OuterDiv = styled.div`
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '200px'};
    border: 2px solid black;
    pointer-events: auto;
}
`;

const InnerDiv = styled.div`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    border-radius: 10px;
    background: blue;
    pointer-events: none;
    margin:50px;
`;


function MouseCatch(props){
    const divPlace = useRef();
    const indiv = useRef();

    function divMouseHandler(e){
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        let el = document.querySelector('.' + props.boxname);
        gsap.to(indiv.current, {x: mouseX-el.getBoundingClientRect().left-100,
                                y: mouseY-el.getBoundingClientRect().top-100});
    }

    function mouseMove(){
        divPlace.current.addEventListener('mousemove', divMouseHandler);
    }
    function mouseOut(){
        divPlace.current.removeEventListener('mousemove', divMouseHandler);
        gsap.to(indiv.current, {x:0, y:0});
    }


    return(
        <div className='MouseCatch'>
            <OuterDiv className={props.boxname} onMouseMove={mouseMove} onMouseOut={mouseOut} ref={divPlace}>
                <InnerDiv ref={indiv}></InnerDiv>
            </OuterDiv>
        </div>
    )
}

export default MouseCatch;