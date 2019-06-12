import React from 'react'
import  MovieCard  from "../MovieCard";
import {configure, mount } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter()})


test('Check movieCard favourite after click', () => {
    const movieCard = mount (
        <MovieCard 
            id={458156}
            title = 'Avengers Endgame'
            year = '2019'
            image = 'url_img'
            genre = 'action'
            overview = 'This is a greates movie xP'
        />
    )

    expect(movieCard.find('.favourite-start').hasClass('checked')).toBeFalsy()

    // Firing event
    movieCard.find('button.favourite-button').simulate('click')
    expect(movieCard.find('.favourite-start').hasClass('checked')).toBeTruthy()
    
})