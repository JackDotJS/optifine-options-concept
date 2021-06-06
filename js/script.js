const opts = {}

const pages = {
  default: {
    type: `normal`,
    title: `This menu doesn't exist!`,
    inputs: [
      [
        {
          type: `button`,
          label: `Back`,
          width: 3,
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
          width: 2,
          min: 30,
          default: 70,
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
          width: 2,
          options: [
            `ON`,
            `OFF`
          ]
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Skin Customization...`,
          width: 2,
          page: `skin`
        },
        {
          type: `button`,
          label: `Music & Sounds...`,
          width: 2,
          page: `sound`
        }
      ],
      [
        {
          type: `button`,
          label: `Video Settings...`,
          width: 2,
          page: `video`
        },
        {
          type: `button`,
          label: `Controls...`,
          width: 2,
          page: `controls`
        }
      ],
      [
        {
          type: `button`,
          label: `Language...`,
          width: 2,
          page: `lang`
        },
        {
          type: `button`,
          label: `Chat Settings...`,
          width: 2,
          page: `chat`
        }
      ],
      [
        {
          type: `button`,
          label: `Resource Packs...`,
          width: 2,
          page: `rps`
        },
        {
          type: `button`,
          label: `Accessibility Settings...`,
          width: 2,
          page: `access`
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `OptiFine Settings...`,
          page: `of_main`,
          width: 3,
          centered: true
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          url: `https://github.com/JackDotJS/optifine-options-concept`,
          width: 3,
          centered: true
        }
      ],
    ]
  },
  of_main: {
    type: `normal`,
    title: `OptiFine Settings`,
    subtitle: `Hover over any option for detailed information.`,
    inputs: [
      [
        {
          type: `switch`,
          label: `Preset: %VALUE%`,
          opt: `of_quality`,
          centered: true,
          width: 3,
          options: [
            `Default`,
            `Completely Vanilla`,
            `More Quality`,
            `Maximum Quality`,
            `More Performance`,
            `Maximum Performance`,
            `Custom`,
          ],
        },
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Graphics...`,
          page: `of_graphics`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `button`,
          label: `Performance...`,
          page: `of_perf`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `button`,
          label: `QOL...`,
          page: `of_qol`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `button`,
          label: `OptiFine Cape...`,
          page: `of_cape`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `button`,
          label: `Advanced...`,
          page: `of_adv`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `button`,
          label: `About...`,
          page: `of_info`,
          centered: true,
          width: 4
        },
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `options`
        }
      ]
    ]
  },
  of_graphics: {
    type: `scrollable_normal`,
    title: `Graphics Settings`,
    inputs: [
      [
        {
          type: `text`,
          centered: true,
          content: `General`
        }
      ],
      [
        {
          type: `slider`,
          label: `Brightness: +%VALUE%%`,
          opt: `brightness`,
          width: 4,
          min: 0,
          default: 0,
          max: 100,
          named: {
            0: `Moody`,
            100: `Bright`
          }
        },
      ],
      [
        {
          type: `switch`,
          label: `Window Mode: %VALUE%`,
          opt: `of_win_mode`,
          width: 4,
          centered: true,
          options: [
            `Windowed`,
            `Borderless Window`,
            `Fullscreen`,
          ],
          onchange: () => {
            const res_opts = document.querySelectorAll(`.of_res_opts`);
            const display_opts = document.querySelectorAll(`.of_display_opts`);

            if (opts.of_win_mode === `Windowed`) {
              for (const button of [...res_opts, ...display_opts]) {
                if (!button.classList.contains(`disabled`)) button.classList.add(`disabled`);
              }
            }

            if (opts.of_win_mode === `Borderless Window`) {
              for (const button of res_opts) {
                if (button.classList.contains(`disabled`)) button.classList.remove(`disabled`);
              }

              for (const button of display_opts) {
                if (!button.classList.contains(`disabled`)) button.classList.add(`disabled`);
              }
            }

            if (opts.of_win_mode === `Fullscreen`) {
              for (const button of [...res_opts, ...display_opts]) {
                if (button.classList.contains(`disabled`)) button.classList.remove(`disabled`);
              }
            }
          }
        }
      ],
      [
        {
          type: `slider`,
          label: `Width: %VALUE%`,
          class: `of_res_opts`,
          opt: `of_win_width`,
          width: 2,
          min: 640,
          default: screen.width,
          max: screen.width
        },
        {
          type: `slider`,
          label: `Height: %VALUE%`,
          class: `of_res_opts`,
          opt: `of_win_height`,
          width: 2,
          min: 480,
          default: screen.height,
          max: screen.height
        },
      ],
      [
        {
          type: `switch`,
          label: `Refresh Rate: %VALUE%`,
          class: `of_display_opts`,
          opt: `of_win_rate`,
          width: 2,
          options: [
            `60`
          ]
        },
        {
          type: `switch`,
          label: `Bit Depth: %VALUE%`,
          class: `of_display_opts`,
          opt: `of_win_depth`,
          width: 2,
          options: [
            screen.colorDepth,
            screen.pixelDepth
          ]
        },
      ],
      [
        {
          type: `switch`,
          label: `Vertical Sync: %VALUE%`,
          opt: `vsync`,
          width: 2,
          options: [
            `OFF`,
            `ON`
          ],
          onchange: () => {
            const fpslimit = document.querySelector(`.of_fpsmax`);

            if (opts.vsync === `ON`) {
              if (!fpslimit.classList.contains(`disabled`)) fpslimit.classList.add(`disabled`);
            } else {
              if (fpslimit.classList.contains(`disabled`)) fpslimit.classList.remove(`disabled`);
            }
          }
        },
        {
          type: `slider`,
          label: `Framerate Limit: %VALUE% FPS`,
          class: `of_fpsmax`,
          opt: `fps_limit`,
          width: 2,
          min: 5,
          default: 120,
          max: 260,
          step: 5,
          named: {
            260: `Unlimited`
          }
        },
      ],
      [
        {
          type: `slider`,
          label: `Anti-aliasing: %VALUE%`,
          opt: `of_aa`,
          width: 2,
          min: 0,
          default: 0,
          max: 6,
          named: {
            0: `OFF`,
            1: `2x`,
            2: `4x`,
            3: `6x`,
            4: `8x`,
            5: `12x`,
            6: `16x` 
          }
        },
        {
          type: `slider`,
          label: `Anisotropic Filtering: %VALUE%`,
          opt: `of_af`,
          width: 2,
          min: 0,
          default: 0,
          max: 3,
          named: {
            0: `OFF`,
            1: `4x`,
            2: `8x`,
            3: `16x` 
          }
        },
      ],
      [
        {
          type: `slider`,
          label: `Mipmap Levels: %VALUE%`,
          opt: `of_mip`,
          width: 2,
          min: 0,
          default: 0,
          max: 4,
          named: {
            0: `OFF`,
            4: `Maximum` 
          }
        },
        {
          type: `switch`,
          label: `Mipmap Mode: %VALUE%`,
          opt: `of_mip_mode`,
          width: 2,
          options: [
            `Nearest`,
            `Linear`,
            `Bilinear`,
            `Trilinear`
          ]
        },
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `text`,
          centered: true,
          content: `Shaders`
        }
      ],
      [
        {
          type: `button`,
          label: `Shaders...`,
          width: 4,
          centered: true,
          page: `of_shaders`
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `text`,
          centered: true,
          content: `World`
        }
      ],
      [
        {
          type: `slider`,
          label: `Render Distance: %VALUE% chunks`,
          opt: `r_dist`,
          width: 4,
          min: 2,
          default: 8,
          max: 48
        },
      ],
      [
        {
          type: `slider`,
          label: `Entity Render Distance: %VALUE%%`,
          opt: `of_entity_dist`,
          width: 4,
          min: 50,
          default: 100,
          max: 500,
          step: 25,
          named: {
            100: `Default`
          }
        },
      ],
      [
        {
          type: `switch`,
          label: `Smooth Lighting: %VALUE%`,
          opt: `smoothlight`,
          width: 2,
          options: [
            `Complex`,
            `OFF`,
            `Simple`
          ],
          onchange: () => {
            const sl_level = document.querySelector(`.of_sl_level`);

            if (opts.smoothlight === `OFF`) {
              if (!sl_level.classList.contains(`disabled`)) sl_level.classList.add(`disabled`);
            } else {
              if (sl_level.classList.contains(`disabled`)) sl_level.classList.remove(`disabled`);
            }
          }
        },
        {
          type: `slider`,
          label: `Smooth Lighting Amount: %VALUE%%`,
          class: `of_sl_level`,
          opt: `of_sl_level`,
          width: 2,
          min: 0,
          default: 100,
          max: 100,
          named: {
            0: `OFF`
          }
        },
      ],
      [
        {
          type: `switch`,
          label: `Clouds: %VALUE%`,
          opt: `clouds`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`,
            `OFF`
          ],
        },
        {
          type: `slider`,
          label: `Cloud Height: +%VALUE%%`,
          opt: `of_cloud_height`,
          width: 2,
          min: 0,
          default: 0,
          max: 100,
          named: {
            0: `Default`,
            100: `Sky High`
          }
        },
      ],
      [
        {
          type: `switch`,
          label: `Tree Leaves: %VALUE%`,
          opt: `of_leaves`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Smart`,
            `Fancy`
          ],
        },
        {
          type: `switch`,
          label: `Weather Effects: %VALUE%`,
          opt: `of_weather`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`,
            `OFF`
          ],
        },
      ],
      [
        {
          type: `switch`,
          label: `Sky: %VALUE%`,
          opt: `of_sky`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
        {
          type: `switch`,
          label: `Stars: %VALUE%`,
          opt: `of_stars`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
      ],
      [
        {
          type: `switch`,
          label: `Sun & Moon: %VALUE%`,
          opt: `of_sky`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
        {
          type: `switch`,
          label: `Entity Shadows: %VALUE%`,
          opt: `ent_shadow`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
      ],
      [
        {
          type: `switch`,
          label: `Fog: %VALUE%`,
          opt: `of_fog`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`,
            `OFF`
          ],
        },
        {
          type: `slider`,
          label: `Fog Start: 0.%VALUE%`,
          opt: `of_fog_dist`,
          width: 2,
          min: 2,
          default: 8,
          max: 8
        },
      ],
      [
        {
          type: `switch`,
          label: `Translucent Blocks: %VALUE%`,
          opt: `of_translucency`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`
          ],
        },
        {
          type: `switch`,
          label: `Alternate Blocks: %VALUE%`,
          opt: `of_alt_blocks`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
      ],
      [
        {
          type: `switch`,
          label: `Swamp Colors: %VALUE%`,
          opt: `of_swamp_col`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`
          ],
        },
        {
          type: `switch`,
          label: `Dropped Items: %VALUE%`,
          opt: `of_ent_items`,
          width: 2,
          options: [
            `Default`,
            `Fast`,
            `Fancy`
          ],
        },
      ],
      [
        {
          type: `slider`,
          label: `Biome Blend: %VALUE%x%VALUE%`,
          opt: `biomeblend`,
          width: 2,
          min: 1,
          default: 5,
          max: 15,
          step: 2,
          named: {
            1: `OFF`
          }
        },
        {
          type: `slider`,
          label: `Particles: %VALUE%x%VALUE%`,
          opt: `particles`,
          width: 2,
          min: 0,
          default: 2,
          max: 2,
          named: {
            0: `Minimal`,
            1: `Decreased`,
            2: `All`
          }
        },
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `text`,
          centered: true,
          content: `Animations`
        }
      ],
      [
        {
          type: `button`,
          label: `All ON`,
          opt: `of_anims_on`,
          width: 2
        },
        {
          type: `button`,
          label: `All OFF`,
          opt: `of_anims_off`,
          width: 2,
        }
      ],
      [
        {
          type: `switch`,
          label: `Water: %VALUE%`,
          opt: `of_anims_water`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
        {
          type: `switch`,
          label: `Lava: %VALUE%`,
          opt: `of_anims_lava`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        }
      ],
      [
        {
          type: `switch`,
          label: `Fire: %VALUE%`,
          opt: `of_anims_fire`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        },
        {
          type: `switch`,
          label: `Portals: %VALUE%`,
          opt: `of_anims_portal`,
          width: 2,
          options: [
            `ON`,
            `OFF`
          ],
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `text`,
          centered: true,
          content: `Extras`
        }
      ],
      [
        {
          type: `switch`,
          label: `Dynamic Lights: %VALUE%`,
          opt: `of_dyn_light`,
          width: 2,
          options: [
            `OFF`,
            `Fast`,
            `Fancy`
          ],
        }
      ]
    ],
    inputs_upper: [
    ],
    inputs_lower: [
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
  of_perf: {
    type: `normal`,
    title: `Performance Settings`,
    inputs: [
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
  of_qol: {
    type: `normal`,
    title: `Quality of Life Settings`,
    inputs: [
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
  of_cape: {
    type: `normal`,
    title: `OptiFine Cape`,
    inputs: [
      [
        // insert image later
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Open Cape Editor`,
          width: 3,
          centered: true,
          url: `https://optifine.net/capeChange`
        }
      ],
      [
        {
          type: `button`,
          label: `Reload Cape`,
          width: 3,
          centered: true
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        // insert text later
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
  of_adv: {
    type: `normal`,
    title: `Advanced Settings`,
    inputs: [
      [
        {
          type: `switch`,
          label: `Lagometer: %VALUE%`,
          opt: `of_lagometer`,
          width: 2,
          options: [
            `OFF`,
            `ON`,
          ],
        },
        {
          type: `switch`,
          label: `Debug Profiler: %VALUE%`,
          opt: `of_debugprofiler`,
          width: 2,
          options: [
            `OFF`,
            `ON`,
          ],
        },
      ],
      [
        {
          type: `switch`,
          label: `Show GL Errors: %VALUE%`,
          opt: `of_glerrors`,
          width: 2,
          options: [
            `OFF`,
            `ON`,
          ],
        },
        {
          type: `switch`,
          label: `Shader Pack Debugging: %VALUE%`,
          opt: `of_internalshader`,
          width: 2,
          options: [
            `OFF`,
            `ON`,
          ],
        },
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
  of_info: {
    type: `normal`,
    title: ``,
    inputs: [
      [
        {
          type: `text`,
          centered: true,
          content: [
            `OptiFine: Optimization and Fine-tuning`,
            `A Minecraft mod by sp614x`,
            ``,
            ``,
            `Official Website`,
            `<a href="https://optifine.net/home">https://optifine.net/home</a>`,
            ``,
            `GitHub`,
            `<a href="https://github.com/sp614x/optifine">https://github.com/sp614x/optifine</a>`,
          ].join(`\n<br>`)
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `text`,
          centered: true,
          content: [
            `OptiFine Version: HD G8 Ultra`,
            `Minecraft Version: 1.16.5`
          ].join(`\n<br>`)
        }
      ],
      [
        {
          type: `spacer`
        }
      ],
      [
        {
          type: `button`,
          label: `Done`,
          width: 3,
          centered: true,
          page: `of_main`
        }
      ]
    ]
  },
}

const click = new Audio(`snd/click.ogg`);

const load = async (pagename) => {
  const page = pages[pagename];

  // clear all ui elements from previous page, if there are any
  const hInputs = document.getElementById(`headerInputs`);
  while (hInputs.firstChild) hInputs.removeChild(hInputs.lastChild);

  const mInputs = document.getElementById(`mainInputs`);
  while (mInputs.firstChild) mInputs.removeChild(mInputs.lastChild);

  const fInputs = document.getElementById(`footerInputs`);
  while (fInputs.firstChild) fInputs.removeChild(fInputs.lastChild);

  // clear subtitles, if there are any
  const subtitles = document.querySelectorAll(`.subtitle`);
  for (const p of subtitles) {
    p.remove();
  }

  if (page == null) {
    console.warn(`Invalid page requested: ${pagename}`);
    load(`default`);
    return;
  }

  const afterloadfuncs = [];

  if (pagename !== `default`) pages.default.inputs[0][0].page = pagename;

  const title = document.querySelector(`#menuTitle`);
  title.querySelector(`p`).innerHTML = page.title;

  if (page.subtitle) {
    const subtitle = document.createElement(`p`);

    subtitle.innerHTML = page.subtitle;
    subtitle.classList.add(`subtitle`);

    title.appendChild(subtitle);
  }

  if ([`normal`].includes(page.type)) {
    title.classList = `normal`;
  } else {
    title.classList = `narrow`;
  }

  if (page.type === `scrollable_normal`) {
    document.querySelector(`#inputContainer`).classList = `scrollable`;
  } else {
    document.querySelector(`#inputContainer`).classList = ``;
  }

  const processInputs = (src, dest) => {
    for (const rowData of src) {
      const row = document.createElement(`div`);
      row.classList.add(`row`)
  
      dest.appendChild(row);
  
      for (const optionData of rowData) {
        const option = document.createElement(`div`);
        let label = null;
  
        if (optionData.class != null) option.classList.add(optionData.class);
  
        if (optionData.centered) option.classList.add(`centered`);
        if (optionData.disabled) option.classList.add(`disabled`);
  
        if (optionData.label != null) {
          label = document.createElement(`div`);
          label.classList.add(`label`);
          label.innerHTML = optionData.label;
        }
  
        const clickEvents = [];
  
        const updateOption = async (e) => {
          let value = e.value;
          let text = value;
  
          let rgx = `%VALUE%`
  
          if (optionData.named != null) {
            const name = optionData.named[value];
            if (name != null) {
              text = ` ` + name;
              rgx = `[^:]*${rgx}.*`; // erases any/all text around the %VALUE% placeholder
            }
          }
  
          opts[optionData.opt] = value;
  
          if (label != null) label.innerHTML = optionData.label.replace(new RegExp(rgx, `g`), text);
        }
  
        row.appendChild(option);
  
        if ([`button`, `slider`, `switch`].includes(optionData.type)) {
          option.classList.add(`optionBase`);
  
          if (optionData.width != null) {
            option.classList.add(`width${optionData.width}`);
          } else {
            option.classList.add(`width1`);
          }
  
          clickEvents.push(() => {
            click.currentTime = 0; click.play();
          });
        }
  
        if (optionData.type === `text`) {
          option.classList.add(`text`);
          option.innerHTML = optionData.content;
        }
  
        if (optionData.type === `spacer`) {
          option.classList.add(`spacer`);
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
  
          if (opts[optionData.opt] == null) opts[optionData.opt] = optionData.options[0];
  
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
  
          if (opts[optionData.opt] == null) opts[optionData.opt] = optionData.default;
  
          const slider = document.createElement(`input`);
          slider.type = `range`;
          slider.min = optionData.min;
          slider.max = optionData.max;
          slider.autocomplete = `off`
          slider.value = opts[optionData.opt];
  
          if (optionData.step != null) slider.step = optionData.step;
  
          slider.addEventListener(`input`, async () => { updateOption(slider) });
          updateOption(slider)
  
          option.appendChild(slider);
        }
  
        if (optionData.onchange != null) {
          clickEvents.push(optionData.onchange);
          afterloadfuncs.push(optionData.onchange);
        }
  
        option.addEventListener(`click`, async () => {
          for (const func of clickEvents) {
            func();
          }
        });
  
        if (label != null) option.appendChild(label);
      }
    }
  }

  processInputs(page.inputs, mInputs);

  if (page.inputs_upper) processInputs(page.inputs_upper, hInputs);
  if (page.inputs_lower) processInputs(page.inputs_lower, fInputs);

  for (const func of afterloadfuncs) {
    func();
  }

  return;
}

document.addEventListener(`DOMContentLoaded`, async () => {
  load(`options`);
});