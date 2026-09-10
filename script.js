(() => {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  const sectionIds = ["concepts", "stories", "calendar", "themes", "ideas", "approach", "contact"];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

  const setCurrent = () => {
    const fromTop = window.scrollY + 96;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= fromTop) current = id;
    }
    navLinks.forEach((link) => {
      const match = link.getAttribute("href") === `#${current}`;
      if (match) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  setCurrent();
  window.addEventListener("scroll", setCurrent, { passive: true });

  document.querySelectorAll("[data-story]").forEach((story) => {
    const frames = [...story.querySelectorAll(".frame")];
    const ticks = [...story.querySelectorAll(".phone-top span")];
    const status = story.querySelector("[data-frame-status]");
    const phone = story.querySelector(".phone");
    let index = 0;

    const show = (next) => {
      index = (next + frames.length) % frames.length;
      frames.forEach((frame, i) => frame.classList.toggle("is-active", i === index));
      ticks.forEach((tick, i) => tick.classList.toggle("is-on", i <= index));
      if (status) status.textContent = `Frame ${index + 1} of ${frames.length}`;
    };

    story.querySelector("[data-next]")?.addEventListener("click", () => show(index + 1));
    story.querySelector("[data-prev]")?.addEventListener("click", () => show(index - 1));

    phone?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(index + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(index - 1);
      }
    });

    show(0);
  });

  document.querySelectorAll(".poll-options").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((other) => {
          other.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");
      });
    });
  });

  const ideas = [
    {
      category: "food",
      hook: "Windsor, this is dinner.",
      caption: "Tacos first. Night later. A proposed look at TQLA’s Mexican-inspired plates — the exact item and plating would be confirmed with the kitchen before filming.",
      cta: "Save this for dinner plans. Use the official link in bio for the current menu and delivery."
    },
    {
      category: "food",
      hook: "If you can hear the sizzle, you’re already late.",
      caption: "A pass-check Reel built around steam, lime, and a plated taco from the current food menu. Hypothetical plating only until TQLA confirms the dish of the day.",
      cta: "Comment TACOS if you’re coming in. Delivery is available through TQLA’s official Uber Eats listing."
    },
    {
      category: "cocktails",
      hook: "Don’t scroll. Watch the pour.",
      caption: "A tequila cocktail from the current bar menu — recipe, glass, and garnish subject to bar confirmation. Crafted to feel close enough to taste.",
      cta: "Tag the person who orders first."
    },
    {
      category: "cocktails",
      hook: "Margarita energy. Downtown lighting.",
      caption: "Proposed short-form for a margarita-style serve and a tequila cocktail, matching the public food-and-drink positioning on TQLA’s site and Instagram. Exact drinks TBD with the bar.",
      cta: "Which glass are we starting with? Reply with 1 or 2."
    },
    {
      category: "nightlife",
      hook: "This is what downtown sounds like after dark.",
      caption: "Atmosphere first: lights, glass, and room tone from a night TQLA confirms is right to film. Crowd stays wide and unidentifiable unless consent is given.",
      cta: "If you’re in Windsor this weekend, this is the room. Guestlist via the official link."
    },
    {
      category: "nightlife",
      hook: "The lights come up. You already know.",
      caption: "A proposed weekend atmosphere cut for Instagram Reels, TikTok, and Facebook: DJ booth from a respectful distance, amber beams, no invented performer names.",
      cta: "Send this to the group chat."
    },
    {
      category: "specials",
      hook: "Before you ask what’s on tonight—",
      caption: "A same-day specials template. The offer line, price, and item stay blank until management confirms them. This is a shooting system, not a made-up promo.",
      cta: "Tonight’s details, once confirmed, go in the caption and the first comment."
    },
    {
      category: "specials",
      hook: "Kitchen and bar, same frame.",
      caption: "Proposed pairing post: one confirmed plate + one confirmed pour. Intended to make a weekly special feel immediate without inventing the offer.",
      cta: "Ask us in DMs only after the official caption is live."
    },
    {
      category: "reservations",
      hook: "Your table is the whole night.",
      caption: "VIP booths, table service, and group nights as TQLA describes them publicly. No invented bottle-service minimums, hours, or entry guarantees.",
      cta: "Reserve through the official guestlist / reservations flow in the link in bio."
    },
    {
      category: "reservations",
      hook: "Booth first. Then the night can start.",
      caption: "A quiet, premium booth walkthrough intended to encourage weekend reservations. Seating details remain subject to TQLA confirmation.",
      cta: "Birthdays and groups: use the official reserve form, not the comments."
    },
    {
      category: "events",
      hook: "The night has a start time. Do you?",
      caption: "Event content built after management confirms the date, talent, and offer. Weekend DJ nights are part of TQLA’s public positioning; specific names and tickets stay unannounced here.",
      cta: "Official event details live in the link in bio when TQLA publishes them."
    },
    {
      category: "events",
      hook: "Come for the room. Stay because the night opened up.",
      caption: "A proposed live-night sequence: arrival, lights, a consented guest moment, and a clean end card pointing to guestlist. Hypothetical until the event sheet is confirmed.",
      cta: "If you’re already on the way, screenshot the official post — not this spec."
    }
  ];

  const ideaGrid = document.getElementById("idea-grid");
  const ideaStatus = document.getElementById("idea-status");
  const filterForm = document.getElementById("idea-filters");

  const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  const renderIdeas = (category) => {
    const selected = category || "all";
    const rows = selected === "all" ? ideas : ideas.filter((idea) => idea.category === selected);

    if (ideaStatus) {
      const label = selected === "all" ? "all categories" : titleCase(selected);
      ideaStatus.textContent = `Showing ${rows.length} proposed idea${rows.length === 1 ? "" : "s"} for ${label}.`;
    }

    if (!ideaGrid) return;
    ideaGrid.replaceChildren();

    rows.forEach((idea) => {
      const card = document.createElement("article");
      card.className = "idea-card";
      card.innerHTML = `
        <span class="spec-label">Spec Concept</span>
        <p class="kicker">${titleCase(idea.category)}</p>
        <h3>${idea.hook}</h3>
        <div class="detail">
          <h4>Proposed caption</h4>
          <p>${idea.caption}</p>
        </div>
        <div class="detail" style="margin-top:0.7rem">
          <h4>Proposed CTA</h4>
          <p>${idea.cta}</p>
        </div>
      `;
      ideaGrid.appendChild(card);
    });
  };

  if (filterForm) {
    filterForm.addEventListener("change", (event) => {
      const input = event.target;
      if (input && input.name === "category") renderIdeas(input.value);
    });
    const initial = filterForm.querySelector('input[name="category"]:checked');
    renderIdeas(initial ? initial.value : "all");
  }
})();
