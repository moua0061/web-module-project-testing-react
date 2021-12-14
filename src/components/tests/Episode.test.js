import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episodeTest = {
    id: 1,
    image: `https://i.ibb.co/2FsfXqM/stranger-things.png`,
    name: '',
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1
}

const episodeImgTest = {
    id: 1,
    image: null,
    name: '',
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1
}


// const {id, image, name, season, number, summary, runtime} = episode;

test("renders without error", () => {
    render(<Episode episode={episodeTest}/>);
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={episodeTest}/>);
    const summary = screen.queryByText(/test summary/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("test summary");
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={episodeImgTest}/>);
    const image = screen.queryByAltText(`https://i.ibb.co/2FsfXqM/stranger-things.png`);
    expect(image).toBeInTheDocument();

});