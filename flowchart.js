document.addEventListener('DOMContentLoaded', () => {
    const globalLogoMap = {
        'Adobe Photoshop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png',
        'Procreate': 'https://assets.procreate.art/img/procreate-icon-search-display.png',
        'Autodesk Maya': 'https://1000logos.net/wp-content/uploads/2023/04/Autodesk-Maya-logo.png',
        'Blender': 'https://download.blender.org/branding/community/blender_community_badge_orange.png',
        'ZBrush': 'https://www.maxon.net/img/logos/maxon-zbrush-logo.svg', // Updated
        'Substance Painter': 'https://cdn.worldvectorlogo.com/logos/substance-painter.svg',
        'MotionBuilder': 'https://1000logos.net/wp-content/uploads/2023/04/Autodesk-MotionBuilder-Logo.png', // Updated
        'Unity Engine': 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg',
        'Unreal Engine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Unreal_Engine_Logo.svg/1280px-Unreal_Engine_Logo.svg.png', // Updated (black/neutral version)
        'Houdini': 'https://www.sidefx.com/media/uploads/company/press/logos/houdini_black.svg',
        'Adobe Illustrator': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
        'Figma': 'https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format',
        'Corel Painter': 'https://cdn.worldvectorlogo.com/logos/corel-painter.svg',
        'SketchUp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/SketchUp_Logotype.svg/1280px-SketchUp_Logotype.svg.png',
        '3ds Max': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Autodesk_3ds_Max_logo.svg/1200px-Autodesk_3ds_Max_logo.svg.png',
        'Mudbox': 'https://1000logos.net/wp-content/uploads/2023/04/Autodesk-Mudbox-Logo.png',
        'Topogun': 'https://www.topogun.com/images/logo.png',
        'RizomUV': 'https://www.rizom-lab.com/wp-content/uploads/2023/10/LOGO_RIZOMUV_BLACK.png',
        'Marmoset Toolbag': 'https://marmoset.co/wp-content/uploads/2023/07/Marmoset-Logo-Black-Inline-NoPadding.svg', // Updated (black version)
        'xNormal': 'http://www.xnormal.net/wp-content/uploads/2015/11/xNormal_logo_black_big_web.png',
        'Substance Designer': 'https://cdn.worldvectorlogo.com/logos/substance-designer.svg',
        '3D Coat': 'https://pilgway.com/files/0000/0208/9111/3DCoat_Primary_logo_horizontal_Dark_Text.png',
        'Mari': 'https://www.foundry.com/products/mari/Mari_Icon_512x512.png', // Updated (specific Mari icon)
        'RealityCapture': 'https://www.capturingreality.com/assets/img/RealityCapture_logo_Black-1920.png', // Updated (black version)
        'AdvancedSkeleton': 'https://www.animationstudios.com.au/advancedskeleton/images/advancedSkeletonLogoBig.gif',
        'mGear': 'https://mgear-framework.com/assets/images/logo_mgear.png',
        'Rigify': 'https://download.blender.org/branding/blender_logo.svg', // Blender general, as Rigify is an addon
        'Mixamo': 'https://logos-world.net/wp-content/uploads/2021/03/Adobe-Mixamo-Logo.png',
        'NVIDIA Skinning Tools': 'https://developer.nvidia.com/sites/default/files/akamai/cuda/images/nvidia-logo.png', // NVIDIA general
        'Spine': 'http://esotericsoftware.com/img/logo/logo-wordmark-color-darktext-hires.png',
        'Live2D': 'https://www.live2d.com/wp-content/themes/live2d_new3/assets/img/general/logo_live2d_cubism_main_alpha.png',
        'Adobe Animate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Adobe_Animate_CC_icon.svg/1200px-Adobe_Animate_CC_icon.svg.png',
        'PopcornFX': 'https://www.popcornfx.com/wp-content/uploads/2022/02/logo-popcornfx-noir.png',
        'Adobe After Effects': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png',
        'EmberGen': 'https://jangafx.com/img/EmberGen_logo_black.svg', // Updated (black version)
        'Sketch': 'https://cdn.worldvectorlogo.com/logos/sketch-1.svg',
        'Adobe XD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2048px-Adobe_XD_CC_icon.svg.png',
        'Principle': 'https://principleformac.com/img/logo-icon-rect.svg',
        'Scaleform': 'https://images.squarespace-cdn.com/content/v1/5a7a3625e45a7c902c5d791c/1579033642799-K1C2CRK8SA62O6W5H9LI/GFx_Logo_Black_Large.png',
        'Axure': 'https://www.axure.com/wp-content/uploads/2022/04/axure_logo_175.svg',
        'TexturePacker': 'https://www.codeandweb.com/images/texturepacker/logo-texturepacker.png',
        'CryEngine': 'https://asset.brandfetch.io/id1VI2kfOs/idVXNKnkQG.svg',
        'Godot Engine': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg',
        'Git': 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        'Perforce': 'https://www.perforce.com/themes/custom/perforce/images/logo-tag.svg',
        'RenderDoc': 'https://renderdoc.org/renderdoc_logo_v1_cropped.png',
        'PIX': 'https://learn.microsoft.com/en-us/gaming/gdk/_images/pix-splash-logo.png',
        'Xcode Instruments': 'https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png', // Xcode general
        'Visual Studio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1024px-Visual_Studio_Icon_2019.svg.png'
    };


    const getLogosForTools = (toolNames) => {
        // 需要使用文本标签的软件列表
        const textLabelSoftwares = [
            'Corel Painter', 'SketchUp', '3ds Max', 'ZBrush',
            'Mudbox', 'Topogun', 'RizomUV', 'Marmoset Toolbag', 'xNormal',
            '3D Coat', 'Mari', 'RealityCapture', 'NVIDIA Skinning Tools',
            'Mixamo', 'mGear', 'MotionBuilder', 'Spine', 'Live2D', 'Adobe Animate',
            'PopcornFX', 'EmberGen', 'Unity Shader Graph', 'Unreal Material Editor'
        ];

        return toolNames.map(name => {
            const cleanName = name.replace(' (辅助)', '').replace(' (粒子系统 Shuriken)', '').replace(' (Cascade/Niagara)', '').replace(' (Maya 插件)', '').replace(' (Blender 插件)', '').replace(' (UGUI, TextMesh Pro)','').replace(' (UMG)','').trim();
            
            // 检查是否需要使用文本标签 - 基于原始名称和清理后的名称进行匹配
            const shouldUseTextLabel = textLabelSoftwares.some(sw => 
                name.includes(sw) || cleanName.includes(sw) ||
                // 特殊情况处理
                (sw === 'Unreal Material Editor' && name.includes('Unreal') && name.includes('Material')) ||
                (sw === 'Unity Shader Graph' && name.includes('Unity') && name.includes('Shader'))
            );
            
            if (shouldUseTextLabel) {
                return { 
                    name: cleanName,
                    isTextLabel: true,
                    shortName: getShortName(cleanName)
                };
            }
            
            // 常规图标处理
            if (globalLogoMap[cleanName]) {
                return { url: globalLogoMap[cleanName], name: cleanName };
            }
            // Fallback for complex names if not directly in map
            if (cleanName.startsWith("Unity Engine")) return {url: globalLogoMap["Unity Engine"], name: "Unity Engine"};
            if (cleanName.startsWith("Unreal Engine")) return {url: globalLogoMap["Unreal Engine"], name: "Unreal Engine"};
            // Added fallbacks based on common partial names
            if (cleanName.includes("Photoshop")) return {url: globalLogoMap["Adobe Photoshop"], name: "Adobe Photoshop"}; // Handles "Photoshop" alone
            if (cleanName.includes("Illustrator")) return {url: globalLogoMap["Adobe Illustrator"], name: "Adobe Illustrator"};
            if (cleanName === 'Godot') return {url: globalLogoMap["Godot Engine"], name: "Godot Engine"};
            if (cleanName.includes('NVIDIA')) return { url: globalLogoMap['NVIDIA Skinning Tools'], name: 'NVIDIA'}; // Handle NVIDIA specifically
            if (cleanName.includes('Xcode')) return { url: globalLogoMap['Xcode Instruments'], name: 'Xcode'}; // Handle Xcode specifically

            console.warn("Logo not found for:", cleanName, "(Original name: " + name + ")");
            return null;
        }).filter(logo => logo !== null);
    };

    const processStepsData = [
        {
            id: 'concept-art',
            title: '概念设计',
            subtitle: 'Concept Design',
            cardDescription: '定义游戏视觉风格，设计角色、场景、道具。',
            color: 'bg-sky-50',
            border: 'border-sky-300',
            mdDetails: {
                title: '概念设计 (Concept Art)',
                description: '根据游戏策划设定，定义整体视觉风格，设计角色、场景、道具的概念图和氛围图，为后续制作提供视觉参考。',
                software: ['Adobe Photoshop', 'Corel Painter', 'Procreate', 'Blender (辅助)', 'SketchUp (辅助)'],
                workflow: '是整个美术流程的最上游步骤，为后续所有美术资产的制作提供设计蓝图。影响3D建模、贴图/材质、UI设计等所有后续环节的美术风格和方向。'
            }
        },
        {
            id: 'modeling',
            title: '3D建模',
            subtitle: '3D Modeling',
            cardDescription: '创建三维模型，高模雕刻/低模拓扑，UV拆分。',
            color: 'bg-teal-50',
            border: 'border-teal-300',
            mdDetails: {
                title: '3D 建模 (Modeling)',
                description: '将概念设计转化为可在游戏中使用的三维模型，包括高模雕刻和低模拓扑，并进行UV拆分。',
                software: ['Autodesk Maya', '3ds Max', 'Blender', 'ZBrush', 'Mudbox', 'Topogun', 'RizomUV', 'Marmoset Toolbag', 'xNormal'], // Corrected 'Three.js Max' to '3ds Max'
                workflow: '依赖于概念设计提供的模型外观参考。完成的3D模型是后续贴图和材质绘制以及骨骼绑定的直接输入。'
            }
        },
        {
            id: 'texturing',
            title: '贴图和材质',
            subtitle: 'Texturing and Materials',
            cardDescription: '绘制颜色、细节贴图，赋予模型表面质感.',
            color: 'bg-amber-50',
            border: 'border-amber-300',
            mdDetails: {
                title: '贴图和材质 (Texturing & Materials)',
                description: '为3D模型绘制颜色和各种细节贴图（如法线、金属度、粗糙度等），赋予模型表面质感。',
                software: ['Adobe Photoshop', 'Substance Painter', 'Substance Designer', '3D Coat', 'Mari', 'RealityCapture (辅助)', 'Marmoset Toolbag'],
                workflow: '依赖于已完成的3D模型及其UV展开。制作好的贴图和材质用于增强3D模型的视觉表现，并在引擎整合阶段应用到模型上。'
            }
        },
        {
            id: 'rigging',
            title: '骨骼绑定',
            subtitle: 'Rigging',
            cardDescription: '创建骨骼骨架、控制器，进行权重绑定。',
            color: 'bg-purple-50',
            border: 'border-purple-300',
            mdDetails: {
                title: '骨骼绑定 (Rigging)',
                description: '为3D模型（尤其是角色）创建骨骼骨架和控制器，并进行权重绑定，使其能够被动画师进行动画控制。',
                software: ['Autodesk Maya', '3ds Max', 'Blender', 'ZBrush (辅助)', 'Mudbox (辅助)', 'AdvancedSkeleton (Maya 插件)', 'mGear (Maya 插件)', 'Rigify (Blender 插件)', 'Mixamo', 'NVIDIA Skinning Tools (Maya 插件)'], // Corrected 'Three.js Max' to '3ds Max'
                workflow: '依赖于已完成的3D模型。绑定是后续动画制作的直接输入。'
            }
        },
        {
            id: 'animation',
            title: '动画',
            subtitle: 'Animation',
            cardDescription: '制作角色/物件动作，如行走、攻击、过场动画。',
            color: 'bg-rose-50',
            border: 'border-rose-300',
            mdDetails: {
                title: '动画 (Animation)',
                description: '为绑定好的角色或物件制作各种动作，如行走、攻击、过场动画等。',
                software: ['Autodesk Maya', '3ds Max', 'Blender', 'MotionBuilder', 'Spine (2D)', 'Live2D (2D)', 'Adobe Animate (2D/3D)'], // Corrected 'Three.js Max' to '3ds Max'
                workflow: '依赖于已完成骨骼绑定的模型。制作好的动画资源会在引擎整合阶段导入并配置到动画系统中。'
            }
        },
        {
            id: 'vfx',
            title: '特效',
            subtitle: 'VFX',
            cardDescription: '制作粒子、材质、环境等非实体视觉效果。',
            color: 'bg-lime-50',
            border: 'border-lime-300',
            mdDetails: {
                title: '特效 (VFX, Visual Effects)',
                description: '制作游戏中各种非实体的视觉效果，如粒子效果、材质特效、环境效果等。',
                software: ['Unity Engine (粒子系统 Shuriken)', 'Unreal Engine (Cascade/Niagara)', 'PopcornFX', 'Adobe After Effects', 'Photoshop', 'Houdini', 'EmberGen', 'Unity Shader Graph', 'Unreal Material Editor'],
                workflow: '部分特效素材制作可能依赖于概念设计。特效本身可以在任何阶段并行制作，但最终需要与模型、动画、场景一起在引擎中整合，与程序员/Asset Artists/Effector Artists协作。'
            }
        },
        {
            id: 'ui-design',
            title: 'UI设计与动效',
            subtitle: 'UI Design & Motion Graphics',
            cardDescription: '设计界面元素，制作界面交互动效。',
            color: 'bg-fuchsia-50',
            border: 'border-fuchsia-300',
            mdDetails: {
                title: 'UI 设计与动效 (UI Design & Animation)',
                description: '设计制作游戏菜单、HUD、图标等所有界面元素，并制作界面交互动效.',
                software: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Sketch', 'Adobe XD', 'Adobe After Effects', 'Principle', 'Unity Engine (UGUI, TextMesh Pro)', 'Unreal Engine (UMG)', 'Scaleform', 'Axure', 'TexturePacker'],
                workflow: '设计风格依赖于概念设计。UI动效制作可能依赖于特效。最终的UI元素和动效需要在引擎中进行组装和逻辑配置，与程序/UE协作。'
            }
        },
        {
            id: 'integration',
            title: '引擎整合',
            subtitle: 'Engine Integration',
            cardDescription: '导入所有资源，设置材质，搭建场景，优化。',
            color: 'bg-indigo-50',
            border: 'border-indigo-300',
            mdDetails: {
                title: '引擎整合 (Integration into Engine)',
                description: '将所有美术资源（模型、贴图、动画、特效、UI 等）导入游戏引擎，设置材质、配置动画系统、搭建场景、进行性能优化等。',
                software: ['Unity Engine', 'Unreal Engine', 'CryEngine', 'Godot Engine', 'Git', 'Perforce', 'Unity Profiler', 'Unreal Profiling tools', 'RenderDoc', 'PIX', 'Xcode Instruments', 'Visual Studio', 'Shader compilers'],
                workflow: '是所有前期美术资产制作完成后的综合步骤。将各种独立的资产转化为实际可运行的游戏画面，并进行最终的性能优化和质量检查，是美术流程的收尾阶段，与程序和关卡设计紧密协作。'
            }
        }
    ];

    const flowchartData = processStepsData.map((step, index) => ({
        id: step.id,
        title: step.title,
        subtitle: step.subtitle,
        description: step.cardDescription,
        logos: getLogosForTools(step.mdDetails.software),
        color: step.color,
        border: step.border,
        position: { col: 1, row: index + 1 }
    }));

    const processDetailsMap = processStepsData.reduce((acc, step) => {
        acc[step.id] = step.mdDetails;
        return acc;
    }, {});

    const flowchartEl = document.getElementById('flowchart');
    let flowchartHTML = `<div class="grid grid-cols-[1fr,minmax(300px,2fr),1fr] gap-y-12 gap-x-4 relative py-8">`;

    flowchartData.forEach(node => {
        let logosHTML = '';
        if (node.logos.length > 0) {
            node.logos.forEach(logo => {
                if (logo.isTextLabel) {
                    // 使用文本标签显示
                    logosHTML += `
                        <div class="software-logo-text group relative rounded-lg bg-gray-200 hover:bg-gray-300 px-2 py-1 inline-flex items-center justify-center text-sm font-medium transition-colors" title="${logo.name}">
                            ${logo.shortName}
                        </div>
                    `;
                } else {
                    // 使用图像显示
                    logosHTML += `
                        <div class="software-logo group relative" title="${logo.name}">
                            <img src="${logo.url}" alt="${logo.name}" class="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-200 group-hover:scale-110">
                        </div>
                    `;
                }
            });
        } else {
              logosHTML = `<p class="text-xs text-gray-500 italic mb-2">无特定软件图标</p>`;
        }

        flowchartHTML += `
            <div
                id="${node.id}"
                class="process-node col-start-2 row-start-${node.position.row}
                       ${node.color} ${node.border} border-2 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer relative group"
                data-process-id="${node.id}"
                style="grid-column: 2 / span 1;"
                tabindex="0" <!-- For accessibility -->
            >
                <div class="text-center mb-3">
                    <h3 class="text-lg md:text-xl font-semibold text-gray-900">${node.title}</h3>
                    <p class="text-sm md:text-base text-gray-600">${node.subtitle}</p>
                </div>
                <p class="text-xs md:text-sm text-gray-700 mb-4 text-center min-h-[3em]">${node.description}</p>
                <div class="flex flex-wrap justify-center items-center gap-2 md:gap-3 pt-3 border-t ${node.border} border-opacity-50">
                    ${logosHTML}
                </div>
                <span class="absolute bottom-2 right-3 text-[0.6rem] md:text-xs text-purple-700 opacity-80 font-medium">
                   鼠标点击可查看详细
                </span>
            </div>
        `;
    });

    flowchartHTML += `</div>`;
    flowchartEl.innerHTML = flowchartHTML;

    // Modal elements
    const modal = document.getElementById('details-modal');
    const modalContentWrapper = document.getElementById('modal-content-wrapper');
    const modalBody = document.getElementById('modal-body');
    const modalCloseButton = document.getElementById('modal-close-button');

    function openModal(processId) {
        const detailsData = processDetailsMap[processId];
        if (!detailsData) {
            console.error('Details not found for process ID:', processId);
            modalBody.innerHTML = '<p class="text-gray-500">Details not available.</p>';
        } else {
            let softwareListHTML = detailsData.software.map(sw => {
                const originalName = sw;
                
                // 检查是否是使用文本标签的软件
                const cleanName = originalName.replace(' (辅助)', '').replace(' (粒子系统 Shuriken)', '').replace(' (Cascade/Niagara)', '').replace(' (Maya 插件)', '').replace(' (Blender 插件)', '').replace(' (UGUI, TextMesh Pro)','').replace(' (UMG)','').trim();
                
                // 重用getLogosForTools中的逻辑来决定是否使用文本标签
                const textLabelSoftwares = [
                    'Corel Painter', 'SketchUp', '3ds Max', 'ZBrush',
                    'Mudbox', 'Topogun', 'RizomUV', 'Marmoset Toolbag', 'xNormal',
                    '3D Coat', 'Mari', 'RealityCapture', 'NVIDIA Skinning Tools',
                    'Mixamo', 'mGear', 'MotionBuilder', 'Spine', 'Live2D', 'Adobe Animate',
                    'PopcornFX', 'EmberGen', 'Unity Shader Graph', 'Unreal Material Editor'
                ];
                
                const shouldUseTextLabel = textLabelSoftwares.some(sw => 
                    originalName.includes(sw) || cleanName.includes(sw) ||
                    (sw === 'Unreal Material Editor' && originalName.includes('Unreal') && originalName.includes('Material')) ||
                    (sw === 'Unity Shader Graph' && originalName.includes('Unity') && originalName.includes('Shader'))
                );
                
                let logoInfo;
                if (shouldUseTextLabel) {
                    // 文本标签显示
                    logoInfo = `<span class="inline-flex items-center justify-center w-6 h-6 mr-2 bg-gray-200 rounded-lg text-xs font-medium">${getShortName(cleanName)}</span>`;
                } else {
                    // 常规图标处理
                    const logoUrl = getLogoUrlForSoftware(cleanName);
                    if (logoUrl) {
                        logoInfo = `<img src="${logoUrl}" alt="${cleanName}" class="w-5 h-5 mr-2 object-contain inline-block">`;
                    } else {
                        logoInfo = `<span class="inline-block w-5 h-5 mr-2 bg-gray-200 rounded-sm flex items-center justify-center text-[0.5rem] text-gray-500" aria-label="No logo">NL</span>`;
                    }
                }

                return `<li class="flex items-center mb-1.5 text-slate-700">
                            ${logoInfo}
                            <span>${originalName}</span>
                        </li>`;
            }).join('');
            
            // 辅助函数，获取软件的logo URL
            function getLogoUrlForSoftware(name) {
                if (globalLogoMap[name]) {
                    return globalLogoMap[name];
                }
                // Fallback处理
                if (name.startsWith("Unity Engine")) return globalLogoMap["Unity Engine"];
                if (name.startsWith("Unreal Engine")) return globalLogoMap["Unreal Engine"];
                if (name.includes("Photoshop")) return globalLogoMap["Adobe Photoshop"];
                if (name.includes("Illustrator")) return globalLogoMap["Adobe Illustrator"];
                if (name === 'Godot') return globalLogoMap["Godot Engine"];
                if (name.includes('NVIDIA')) return globalLogoMap['NVIDIA Skinning Tools'];
                if (name.includes('Xcode')) return globalLogoMap['Xcode Instruments'];
                return null;
            }

            if (detailsData.software.length === 0) softwareListHTML = '<p class="text-slate-600 italic">暂无特定软件列表。</p>';

            modalBody.innerHTML = `
                <h3 id="modal-title" class="text-2xl font-bold text-slate-800 mb-4 pb-3 border-b border-slate-200">${detailsData.title}</h3>
                <div class="space-y-6 text-sm md:text-base">
                    <div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-2">核心工作内容:</h4>
                        <p class="text-slate-600 leading-relaxed">${detailsData.description}</p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-2">主要使用的软件工具:</h4>
                        <ul class="list-none p-0 m-0 space-y-1">
                            ${softwareListHTML}
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold text-slate-700 mb-2">上下游关系:</h4>
                        <p class="text-slate-600 leading-relaxed">${detailsData.workflow}</p>
                    </div>
                </div>
            `;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            modal.classList.add('opacity-100');
            modalContentWrapper.classList.remove('opacity-0', 'scale-95');
            modalContentWrapper.classList.add('opacity-100', 'scale-100');
        });
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        modalContentWrapper.classList.remove('opacity-100', 'scale-100');
        modalContentWrapper.classList.add('opacity-0', 'scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    }

    modalCloseButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    const processNodes = document.querySelectorAll('.process-node');
    processNodes.forEach(node => {
        node.addEventListener('click', function() {
            processNodes.forEach(n => n.classList.remove('active', 'ring-4', 'ring-blue-400', 'ring-opacity-50'));
            this.classList.add('active', 'ring-4', 'ring-blue-400', 'ring-opacity-50');
            const processId = this.getAttribute('data-process-id');
            openModal(processId);
        });
        node.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                this.click();
            }
        });
    });

    if (processNodes.length > 0) {
        setTimeout(() => {
             processNodes[0].click();
        }, 100);
    }

    setTimeout(() => {
        drawFlowchartConnections();
    }, 500);

    window.addEventListener('resize', () => {
        if (window.flowchartLines) {
            window.flowchartLines.forEach(line => line.remove());
        }
        window.flowchartLines = [];
        setTimeout(() => {
            if (document.getElementById('flowchart') && document.querySelectorAll('.process-node').length > 0) {
                 drawFlowchartConnections();
            }
        }, 250);
    });
});

function drawFlowchartConnections() {
    if (window.flowchartLines) {
        window.flowchartLines.forEach(line => line.remove());
    }
    window.flowchartLines = [];

    // Simplified and corrected connections based on the user's described flow as the primary path
    const finalConnections = [
        { from: 'concept-art', to: 'modeling', type: 'direct' },
        { from: 'modeling', to: 'texturing', type: 'direct' },
        { from: 'texturing', to: 'rigging', type: 'direct' }, // Corrected: texturing -> rigging, not modeling -> rigging in primary flow for assets. Model is input to rig.
        { from: 'rigging', to: 'animation', type: 'direct' },
        { from: 'animation', to: 'vfx', type: 'direct' }, // VFX can take animated elements
        { from: 'vfx', to: 'ui-design', type: 'direct' }, // UI can incorporate VFX.
        { from: 'ui-design', to: 'integration', type: 'direct' },
        
        // Auxiliary/influential connections from original that make sense
        { from: 'concept-art', to: 'ui-design', type: 'auxiliary', label: 'Style Influence' },
        { from: 'concept-art', to: 'vfx', type: 'auxiliary', label: 'Style Influence' },
        { from: 'modeling', to: 'rigging', type: 'auxiliary', label: 'Model Input', startSocket: 'right', endSocket: 'left', gravity: [-80,80] }, 
        { from: 'texturing', to: 'integration', type: 'auxiliary', label: 'Materials to Engine', startSocket: 'right', endSocket: 'left', gravity: [-80, 0] }, // Materials from texturing go to engine
        { from: 'animation', to: 'integration', type: 'auxiliary', label: 'Animations to Engine', startSocket: 'right', endSocket: 'left', gravity: [-60, 20]},
    ];


    finalConnections.forEach(conn => {
        const fromElement = document.getElementById(conn.from);
        const toElement = document.getElementById(conn.to);

        if (fromElement && toElement) {
            let color, dash, gradient, endPlugColor;
            if (conn.type === 'direct') {
                color = 'rgba(59, 130, 246, 0.9)'; // Blue
                endPlugColor = 'rgba(59, 130, 246, 0.9)';
                dash = false;
                gradient = { startColor: 'rgba(96, 165, 250, 0.9)', endColor: 'rgba(37, 99, 235, 0.9)' };
            } else { // auxiliary
                color = 'rgba(139, 92, 246, 0.7)'; // Purple
                endPlugColor = 'rgba(139, 92, 246, 0.7)';
                dash = { animation: false, len: 5, gap: 3 };
                gradient = false;
            }

            const lineOptions = {
                path: 'grid',
                size: conn.type === 'direct' ? 3 : 2.5,
                color: color,
                endPlugColor: endPlugColor,
                startSocket: conn.startSocket || 'bottom',
                endSocket: conn.endSocket || 'top',
                startPlug: 'disc',
                startPlugSize: 1.5,
                endPlug: 'arrow2',
                endPlugSize: 1.2,
                dash: dash,
                gradient: gradient,
                outline: true,
                outlineColor: 'rgba(0,0,0,0.05)',
                outlineSize: 0.5,
            };

            if (conn.label) {
                 lineOptions.middleLabel = LeaderLine.obj.captionLabel(conn.label, {
                    color: conn.type === 'direct' ? 'rgba(2,6,23,0.65)' : 'rgba(55,48,163,0.75)',
                    fontSize: '0.6rem',
                    offset: [0, -5],
                    lineOffset: 10,
                });
            }

            if (conn.gravity) { // Custom gravity for specific lines
                 lineOptions.startSocketGravity = conn.gravity[0];
                 lineOptions.endSocketGravity = conn.gravity[1];
            } else if (conn.startSocket === 'right' || conn.startSocket === 'left') { // Default side gravity
                lineOptions.startSocketGravity = conn.startSocket === 'right' ? [-60, 0] : [60,0];
                lineOptions.endSocketGravity = conn.endSocket === 'left' ? [60,0] : [-60,0];
            }
            
            // Specific adjustments from original for auxiliary lines if still needed
            if (conn.from === 'concept-art' && conn.to === 'ui-design') {
                lineOptions.startSocket = 'right'; lineOptions.endSocket = 'left';
                lineOptions.startSocketGravity = [-150, -50]; lineOptions.endSocketGravity = [150, -50];
            }
             if (conn.from === 'concept-art' && conn.to === 'vfx') {
                lineOptions.startSocket = 'right'; lineOptions.endSocket = 'left';
                lineOptions.startSocketGravity = [-120, -30]; lineOptions.endSocketGravity = [120, -30];
            }


            try {
              const line = new LeaderLine(fromElement, toElement, lineOptions);
              window.flowchartLines.push(line);
            } catch (e) {
              console.error("Error drawing leader line:", e, {from: conn.from, to: conn.to, options: lineOptions});
            }
        }
    });
}

// 获取软件名称的首字母或缩写
const getShortName = (name) => {
    // 针对常见软件的特殊缩写
    const specialAbbreviations = {
        'Corel Painter': 'CP',
        'SketchUp': 'SU',
        '3ds Max': '3dsM',
        'ZBrush': 'ZB',
        'Mudbox': 'MB',
        'Topogun': 'TG',
        'RizomUV': 'RUV',
        'Marmoset Toolbag': 'MT',
        'xNormal': 'xN',
        '3D Coat': '3DC',
        'Mari': 'Mari',
        'RealityCapture': 'RC',
        'NVIDIA Skinning Tools': 'NVST',
        'Mixamo': 'Mix',
        'mGear': 'mG',
        'MotionBuilder': 'MoBu',
        'Spine': 'Spine',
        'Live2D': 'L2D',
        'Adobe Animate': 'AA',
        'PopcornFX': 'PFX',
        'EmberGen': 'EG',
        'Unity Shader Graph': 'USG',
        'Unreal Material Editor': 'UME'
    };

    if (specialAbbreviations[name]) {
        return specialAbbreviations[name];
    }

    // 默认返回首字母(最多3个)
    return name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .substring(0, 3);
};

