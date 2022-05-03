import {buttonClicked} from "./main.js";

it("Should console log 'Mothership' when randomNumber === 14", () => {
    const output = buttonClicked(14);
    expect(output).toBe('Mothership');

})