const opts = {
  fov: 70,
  realms_notif: `ON`,
  test: `opt1`
}

const pages = {
  default: {
    type: `normal`,
    title: `This menu doesn't exist!`,
    inputs: [
      [
        {
          type: `button`,
          label: `Back`,
          wide: true,
          centered: true,
          page: `options`
        }
      ]
    ]
  },
  options: {
    type: `normal`,
    title: `Options`,
    inputs: [
      [
        {
          type: `slider`,
          label: `FOV: %VALUE%`,
          opt: `fov`,
          min: 30,
          max: 110,
          named: {
            70: `Normal`,
            110: `Quake Pro`
          }
        },
        {
          type: `switch`,
          label: `Realms Notifications: %VALUE%`,
          opt: `realms_notif`,
          options: [
            `ON`,
            `OFF`
          ]
        }
      ],
      [
        // spacer
      ],
      [
        {
          type: `button`,
          label: `Skin Customization...`,
          page: `skin`
        },
        {
          type: `button`,
          label: `Music & Sounds...`,
          page: `sound`
        }
      ],
      [
        {
          type: `button`,
          label: `Video Settings...`,
          page: `video`
        },
        {
          type: `button`,
          label: `Controls...`,
          page: `controls`
        }
      ],
      [
        {
          type: `button`,
          label: `Language...`,
          page: `lang`
        },
        {
          type: `button`,
          label: `Chat Settings...`,
          page: `chat`
        }
      ],
      [
        {
          type: `button`,
          label: `Resource Packs...`,
          page: `rps`
        },
        {
          type: `button`,
          label: `Accessibility Settings...`,
          page: `access`
        }
      ],
      [
        // spacer
      ],
      [
        {
          type: `button`,
          label: `OptiFine Settings...`,
          page: `optifine_main`,
          wide: true,
          centered: true
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          url: `https://github.com/JackDotJS/optifine-options-concept`,
          wide: true,
          centered: true
        }
      ],
    ]
  }
}

document.addEventListener(`DOMContentLoaded`, async () => {
  const click = new Audio(`snd/click.ogg`);

  const load = async (pagename) => {
    const page = pages[pagename];

    const inputs = document.getElementById(`inputList`);
    while (inputs.firstChild) inputs.removeChild(inputs.lastChild);

    if (page == null) {
      console.warn(`Invalid page requested: ${pagename}`);
      load(`default`);
      return;
    }

    const title = document.getElementById(`menuTitle`);
    title.innerHTML = page.title;

    if ([`normal`].includes(page.type)) title.classList = `normal`;
    
    if (page.type === `normal`) {
      for (const rowData of page.inputs) {
        const row = document.createElement(`div`);
        row.classList.add(`row`)

        inputs.appendChild(row);

        for (const optionData of rowData) {
          const option = document.createElement(`div`);

          const label = document.createElement(`div`);
          label.classList.add(`label`);
          label.innerHTML = optionData.label;

          const clickEvents = [];

          const updateOption = async (e) => {
            let value = e.value;
            let text = value;

            if (optionData.named != null) {
              const name = optionData.named[value];
              if (name != null) text = name;
            }

            opts[optionData.opt] = value;

            label.innerHTML = optionData.label.replace(/%VALUE%/g, text);
          }

          row.appendChild(option);

          if ([`button`, `slider`, `switch`].includes(optionData.type)) {
            option.classList.add(`optionBase`);

            if (optionData.wide) option.classList.add(`wide`);
            if (optionData.centered) option.classList.add(`centered`);
            if (optionData.disabled) option.classList.add(`disabled`);

            clickEvents.push(() => {
              click.currentTime = 0; click.play();
            });
          }

          if (optionData.type === `button`) {
            option.classList.add(`button`)

            if (optionData.page != null) {
              clickEvents.push(() => {
                load(optionData.page);
              });
            }

            if (optionData.url != null) {
              clickEvents.push(() => {
                window.open(optionData.url, `_blank`);
              });
            }
          }

          if (optionData.type === `switch`) {
            option.classList.add(`button`);

            const list = document.createElement(`select`);
            list.autocomplete = `off`;

            for (const option of optionData.options) {
              const oe = document.createElement(`option`);
              oe.value = option;

              list.appendChild(oe);
            }

            list.value = opts[optionData.opt];

            clickEvents.push(() => {
              const next = optionData.options.indexOf(list.value) + 1;

              if (next === optionData.options.length) {
                list.value = optionData.options[0];
              } else {
                list.value = optionData.options[next];
              }

              updateOption(list);
            });

            updateOption(list);

            option.appendChild(list);
          }

          if (optionData.type === `slider`) {
            option.classList.add(`slider`)

            const slider = document.createElement(`input`);
            slider.type = `range`;
            slider.min = optionData.min;
            slider.max = optionData.max;
            slider.autocomplete = `off`
            slider.value = opts[optionData.opt];

            slider.addEventListener(`input`, async () => { updateOption(slider) });
            updateOption(slider)

            option.appendChild(slider);
          }

          option.addEventListener(`click`, async () => {
            for (const func of clickEvents) {
              func();
            }
          });

          option.appendChild(label);
        }
      }
    }

    return;
  }

  load(`options`);
});