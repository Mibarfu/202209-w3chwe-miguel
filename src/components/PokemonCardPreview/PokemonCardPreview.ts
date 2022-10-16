import Component from "../Component/Component.js";
class PokemonCardPreview extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly id: number,
    private readonly name: string,
    private readonly image: string
  ) {
    super(parentElement, "pokemon-card-preview", "li");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
        <div class="pokemon-window">
          <svg id="blobSvg" width="150" height="150" preserveAspectRatio="none" version="1.1" viewBox="0 0 450 150"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1.1597 0 0 .35465 -48.097 -20.803)">
              <path class="blob"
                d="m416 305q-14 55-53 114.5t-114 62-118-55.5-75-117 6.5-113 84-88.5 107-46 118.5 23.5 57.5 100-13.5 120z"
                fill="#d1d8e0" />
            </g>
          </svg>
          <img class="pokemon-window__image" width="150"
            src="${this.image}" alt="pokemon">
        </div>
        <h3 class="pokemon-card-preview__name ">${this.name}</h3>
        <span class="pokemon-card-preview__id">${this.id}</span>
    `;
  }
}

export default PokemonCardPreview;
