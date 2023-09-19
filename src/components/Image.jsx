const Image = ({ image, link }) => {
  return (
    <>
      <picture>
        <source
          media="(min-width: 761px)"
          srcSet={` 
          /medias/${link}/desktop/${image}`}
        />
        <source
          media="(max-width: 760px)"
          srcSet={` 
          /medias/${link}/tablet/${image}`}
        />
        <source
          media="(max-width: 400px)"
          srcSet={` 
          /medias/${link}/mobile/${image}`}
        />
        <img
          src={`
          /medias/${link}/desktop/${image}`}
        />
      </picture>
    </>
  );
};

export default Image;
