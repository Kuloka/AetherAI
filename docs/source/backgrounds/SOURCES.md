# Background sources

Downloaded from the official React Bits registry on October 8, 2026:

- https://reactbits.dev/r/PatternWaves-JS-CSS.json
- https://reactbits.dev/r/PixelBlast-JS-CSS.json
- https://reactbits.dev/r/ShapeWaves-JS-CSS.json

See ../REACT-BITS-LICENSE.md. The desktop distribution includes this license in resources/reactbits-license.txt.

PixelBlast has a local lifecycle fix: the current animation-frame handle is tracked on every frame, preventing rendering into a disposed context after background switches. Desktop backgrounds disable pointer interactions; Shape Waves is used only for the website wordmark and falls back to readable text when WebGPU is unavailable.
