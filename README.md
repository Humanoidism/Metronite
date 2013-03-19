Metronite
=========

Metronite is a web UI and framework for both apps and websites - use it as you like. It's still under development and are missing elements and documentation.

## Styles and Themes

Metronite is heavily built upon the idea of styles and themes. This makes it very flexible for the designers. For example, every element has a color and a theme. If the element is inside a parent container, for example a simple `div`, all elements inside that container will be styled after the container's class

	<div class="helloContainer theme-dark color-blue">
		<p>Say hello to the <a href="#">people</a></p>
		<input type="text" name="helloText" placeholder="Say Hello">
		<input type="submit" name="submit" value="Say">
	</div>

Every element inside the `div` will now follow the them and color, appended to the parent container's class. However, if you wish to change a color of a single element, this can be done too

	<input type="text" name="helloText" placeholder="Say Hello" class="color-green">
	<input type="submit" name="submit" value="Say" class="theme-light">

## License

Copyright 2013 Humanoidism

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.