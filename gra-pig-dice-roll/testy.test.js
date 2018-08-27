import {Selector} from 'testcafe'

fixture `GlownyTestGry` 
.page `file:///E:/code/gra-pig-dice-roll/index.html`;

test('pierwszy test', async t => {
    await t
    .click('#czekaj-przycisk')
    .expect(Selector('#gracz2').hasClass('bold')).eql(true)
    // .click('#losuj-przycisk')
    // .click('#losuj-przycisk')
    // .click('#czekaj-przycisk')
})