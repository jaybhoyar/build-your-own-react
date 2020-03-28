function createElement(type, props, ...children) {
	return {
		type,
		props: {
			...props,
			children: children.map(child =>
				typeof child === "object" ? child : createTextElement(child)
			)
		}
	};
}
function render(element, container) {
	// TODO create dom nodes
	const dom =
		element.type === "TEXT_ELEMENT"
			? document.createTextNode("")
      : document.createElement(element.type);
      const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
	element.props.children.forEach(child => render(child, dom));
	container.appendChild(dom);
}

function createTextElement(text) {
	return {
		type: "TEXT_ELEMENT",
		props: {
			nodeValue: text,
			children: []
		}
	};
}
const Didact = {
	createElement,
	render
};

/** @jsx Didact.createElement */
const element = (
	<div id="foo">
		<a>bar</a>
		<b />
	</div>
);
const container = document.getElementById("root");
Didact.render(element, container);
