import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		"One Punch",
		"Dragon Ball",
		"Trading Cards",
	]);
	const [count, setCount] = useState(0);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		//categories.push(newCategory);
		setCount(count + 1);
		//const nuevaCategoria = `Nueva_Categoría_${count}`;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={(value) => onAddCategory(value)} />
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
