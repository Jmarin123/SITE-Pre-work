# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: ***Jason Osorio Marin***

Time spent: **5 1/2** hours spent in total

Link to project: https://glitch.com/edit/#!/frost-arrow-atrociraptor

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x](http://g.recordit.co/FiuKPuhtuI.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used www.w3schools.com to find the function to create my random function.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The challenge I encountered was creating the random integers in my array of Integers as I was simply using Math.Random(1,6) for each element as I remembered 1 was 
inclusive but 6 was exclusive. But as I was running the program the sound would never play and would not proceed in showing the squares lit up. Firstly
I checked if there was something wrong in the array so I tested console.log(pattern) to show me what numbers were popping up. When I looked at the console
it showed [0,0,0,0,0,0,0] and a null error on playSingleClue(). This alerted me that there was something clearly wrong with my Math.Random(1,6) so I went to look up on w3schools on the random function.
The first issue was that Math.Random did not take any parameters so it was naturally go to 0, then after changing each element to Math.Random() I believed there was a more efficient
way creating the array thus I used the formula that w3schools provided for the function randomInt that returned the random double of parameters max and min both inclusively then flooring that decimal to make a integer.
After implementing the function I used the parameters 1,5 and used it for each element to finally create a random assort of 8 random digits 1 through 5.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

As I saw there was an issue with how the squares are stacked together in a staggered form but is there any way to implement so it can dynamically change based on the website size?
Because I do explore some website and their items can change or even show new elements based off how the width is configured. Also do you have to document all the variables and functions you create
in the javascript function as good practice or is that just to be organized on this project? Finally, what does the backend of web development do? As in if I made a website like this with simple 
simon says what would a back end web developer be able to do to help or enhance the project?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a couple more hours I would definitely try adding the clock because I need time to think on how I would go about doing so and learning how to do so. Then I'd look at changing the reaction
of the square when clicked such as different tone and adding a small picture in the middle of the square. After implementing those features I would move onto organizing my code and making it look more readable.
Finally, I would go onto bug test any problems that can occur when implementing all those functions or bug test my current program to see if anything wrong can occur when the program is used incorrectly.



## License

    Copyright Jason Osorio Marin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
