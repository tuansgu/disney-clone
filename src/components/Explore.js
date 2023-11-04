import styled from "styled-components";

export const ListImage = [
    {
        category: "Marvel",
        children: [
            {name: "Spider-man", path:"./images/viewers-spider.jpg"},
            {name: "Iron-man", path:"./images/viewers-ironman.jpg"},
            {name: "Captain American", path:"./images/viewers-captain.jpg"},
            {name: "Woder Woman", path:"./images/viewers-woderwoman.jpg"},
            {name: "Hulk", path:"./images/viewers-hulk.jpg"},
            {name: "Avengers", path:"./images/viewers-avengers.jpg"},
            {name: "End Game", path:"./images/viewers-endgame.jpg"},
            {name: "Ant-Man", path:"./images/viewers-antman.jpg"},
        ],
    },
    {
        category: "Animal",
        children: [
            {name: "Lion King", path: "./images/viewers-lion.jpg"},
            {name: "Bambi", path:"./images/viewers-bambi.jpg"},
            {name: "Zootopia", path:"./images/viewers-zootopia.jpg"},
            
        ],
    },
    {
        category: "National",
        children: [
            {name: "Exploring Our World", path:"./images/viewers-world.jpg"},

        ],
    },
    {
        category: "Action",
        children: [
            {name: "Age Of Empires", path:"./images/viewers-aoe.png"},
            {name: "Pirates Of Caribbean", path:"./images/viewers-caribe.jpg"},
            {name: "Spider-man", path:"./images/viewers-spider.jpg"},
            {name: "Iron-man", path:"./images/viewers-ironman.jpg"},
            {name: "Captain American", path:"./images/viewers-captain.jpg"},
            {name: "Woder Woman", path:"./images/viewers-woderwoman.jpg"},
            {name: "Hulk", path:"./images/viewers-hulk.jpg"},
            {name: "Avengers", path:"./images/viewers-avengers.jpg"},
            {name: "End Game", path:"./images/viewers-endgame.jpg"},
            {name: "Ant-Man", path:"./images/viewers-antman.jpg"},


        ],
    },
    {
        category: "Cartoon - Funny",
        children: [
            {name: "Mickey Mouse Cartoon", path:"./images/viewers-mickey.png"},
            {name: "Peter Pan", path:"./images/viewers-peterpan.jpg"},
            {name: "The Little Mermaid", path:"./images/viewers-mermaid.jpg"},
            {name: "Hulk", path:"./images/viewers-hulk.jpg"},
            {name: "Lion King", path:"./images/viewers-lion.jpg"},
            {name: "Toy Store", path:"./images/viewers-toystore.jpg"},
            {name: "Tron ", path: "./images/viewers-tron.jpg"},
            {name: "Serect Of Sulphur Spring", path:"./images/viewers-serect.jpg"},
            {name: "Cars", path:"./images/viewers-car.jpg"},


        ],
    },
    {
        category: "StarWar",
        children: [
            {name: "Star War", path:"./images/viewers-starwar.jpg"},

        ]
    },
    {
        category: "Building Empires",
        children: [
            {name: "Age Of Empires", path:"./images/viewers-aoe.png"},
            {name: "Though the Decade", path:"./images/viewers-decade.jpg"},

        ]
    },
    {
        category: "Princess",
        children: [
            {name: "Pocahontas", path: "./images/viewers-pocahontas.jpg"},
            {name: "Mermaid", path: "./images/viewers-mermaid.jpg"},

        ]
    }


];

const getAllImagePaths = (nodes) => {
    const imagePaths = [];
    
    const extractPaths = (node) => {
      if (node.children) {
        node.children.forEach((child) => {
          extractPaths(child);
        });
      } else {
        imagePaths.push(node.path);
      }
    };
    
    nodes.forEach((node) => {
      extractPaths(node);
    });
    
    return imagePaths;
  };
  
  const Explore = (props) => {
      const allImagePaths = getAllImagePaths(ListImage);
  
      return (
          <Container>
              <InformationGrid>
                  {allImagePaths.map((path, index) => (
                      <Wrap key={index}>
                          <img src={path} alt={`Image ${index}`} />
                      </Wrap>
                  ))}
              </InformationGrid>
          </Container>
      );
  }
  


const Container = styled.main`
    position: relative;
`;
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
const InformationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

`;

export default Explore;
