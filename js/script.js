const opts = {
  fov: 70,
  realms_notif: true
}

const pages = {
  default: {
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
          type: `toggle`,
          label: `Realms Notifications: %VALUE%`,
          opt: `realms_notif`
        }
      ],
      [
        // spacer
      ],
      [
        {
          type: `page`,
          label: `Skin Customization...`,
          page: `skin`
        },
        {
          type: `page`,
          label: `Music & Sounds...`,
          page: `sound`
        }
      ],
      [
        {
          type: `page`,
          label: `Video Settings...`,
          page: `video`
        },
        {
          type: `page`,
          label: `Controls...`,
          page: `controls`
        }
      ],
      [
        {
          type: `page`,
          label: `Language...`,
          page: `lang`
        },
        {
          type: `page`,
          label: `Chat Settings...`,
          page: `chat`
        }
      ],
      [
        {
          type: `page`,
          label: `Resource Packs...`,
          page: `rps`
        },
        {
          type: `page`,
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
          label: `Done`,
          wide: true,
          centered: true
        }
      ],
    ]
  }
}

document.addEventListener(`DOMContentLoaded`, async () => {
  const load = async (pagename) => {
    const page = pages[pagename];
    if (page == null) throw new RangeError(`Invalid page requested: ${pagename}`);

    const inputs = document.getElementById(`inputList`);
    while (inputs.firstChild) inputs.removeChild(inputs.lastChild);

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
          option.classList.add(`optionBase`);
          if (optionData.wide) option.classList.add(`wide`);
          if (optionData.centered) option.classList.add(`centered`);

          const label = document.createElement(`div`);
          label.classList.add(`label`);
          label.innerHTML = optionData.label;

          const updateOption = async (e) => {
            let value = e.value;

            if (e.type === `checkbox`) value = e.checked;

            let text = value;

            if (optionData.named != null) {
              const name = optionData.named[value];
              if (name != null) text = name;
            } else if (e.type === `checkbox`) {
              if (value) text = `ON`;
              else text = `OFF`;
            }

            label.innerHTML = optionData.label.replace(/%VALUE%/g, text);
          }

          row.appendChild(option);

          if (optionData.type === `button`) {
            option.classList.add(`button`)
          }

          if (optionData.type === `page`) {
            option.classList.add(`button`)
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

          if (optionData.type === `toggle`) {
            option.classList.add(`button`)

            const toggle = document.createElement(`input`);
            toggle.type = `checkbox`;
            toggle.autocomplete = `off`
            toggle.checked = opts[optionData.opt];
            toggle.style.display = `none`;

            option.addEventListener(`click`, async () => {
              toggle.checked = !toggle.checked;
              updateOption(toggle)
            });

            updateOption(toggle)

            option.appendChild(toggle);
          }

          option.appendChild(label);
        }
      }
    }
  }

  load(`default`);
});