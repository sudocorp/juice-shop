import {
  waitInMs, sleep
} from '../helpers/helpers'
import { ChallengeInstruction } from '../'

export const ScoreBoardInstruction: ChallengeInstruction = {
  name: 'Score Board',
  hints: [
    {
      text:
        'This application is riddled with security vulnerabilities. Your progress exploiting these is tracked on a _Score Board_.',
      fixture: 'app-navbar',
      unskippable: true,
      resolved: waitInMs(10000)
    },
    {
      text:
        "You won't find a link to it in the navigation or side bar, though. Finding the _Score Board_ is in itself actually one of the hacking challenges.",
      fixture: 'app-navbar',
      resolved: waitInMs(12000)
    },
    {
      text:
        'You could just start guessing the URL of the _Score Board_ or comb through the client-side JavaScript code for useful information.',
      fixture: 'app-navbar',
      resolved: waitInMs(12000)
    },
    {
      text:
        "You find the JavaScript code in the DevTools of your browser that will open with `F12`. Or you just start URL guessing. It's up to you!",
      fixture: 'app-navbar',
      unskippable: true,
      async resolved () {
        while (true) {
          if (window.location.hash === '#/score-board') {
            break
          }
          await sleep(100)
        }
      }
    },
    {
      text: '🎉 Congratulations! You found the _Score Board_! Good luck and happy hacking!',
      fixture: 'app-score-board',
      resolved: waitInMs(60000)
    }
  ]
}
