document.addEventListener('DOMContentLoaded', () => {
    // Draw the flow chart lines after nodes are rendered
    setTimeout(() => {
        drawFlowchartConnections();
    }, 500);

    // Add click event listeners to process nodes
    const processNodes = document.querySelectorAll('.process-node');
    processNodes.forEach(node => {
        node.addEventListener('click', function() {
            // Remove active class from all nodes
            processNodes.forEach(n => n.classList.remove('active'));
            
            // Add active class to clicked node
            this.classList.add('active');
            
            // Display process details
            const processId = this.getAttribute('data-process-id');
            displayProcessDetails(processId);
        });
    });

    // Initialize with the first process
    if (processNodes.length > 0) {
        processNodes[0].click();
    }
});

function drawFlowchartConnections() {
    // Define the connections between processes
    const connections = [
        { from: 'concept-art', to: 'modeling', type: 'direct' },
        { from: 'concept-art', to: 'ui-design', type: 'direct' },
        { from: 'concept-art', to: 'vfx', type: 'indirect' },
        { from: 'modeling', to: 'texturing', type: 'direct' },
        { from: 'modeling', to: 'rigging', type: 'direct' },
        { from: 'texturing', to: 'integration', type: 'direct' },
        { from: 'rigging', to: 'animation', type: 'direct' },
        { from: 'animation', to: 'integration', type: 'direct' },
        { from: 'vfx', to: 'integration', type: 'direct' },
        { from: 'ui-design', to: 'integration', type: 'direct' },
    ];

    // Create leader lines for each connection
    connections.forEach(conn => {
        const fromElement = document.getElementById(conn.from);
        const toElement = document.getElementById(conn.to);

        if (fromElement && toElement) {
            const line = new LeaderLine(
                fromElement,
                toElement,
                {
                    path: 'grid',
                    color: conn.type === 'direct' ? '#3b82f6' : '#a855f7',
                    size: 2,
                    startSocket: 'bottom',
                    endSocket: 'top',
                    startPlug: 'behind',
                    endPlug: 'arrow3',
                    dash: conn.type === 'indirect' ? { animation: true } : false
                }
            );
            
            // Store the line reference for possible cleanup later
            window.flowchartLines = window.flowchartLines || [];
            window.flowchartLines.push(line);
        }
    });
}

function displayProcessDetails(processId) {
    const processDetailsMap = {
        'concept-art': {
            title: '概念设计 (Concept Art)',
            description: '根据游戏策划设定，定义整体视觉风格，设计角色、场景、道具的概念图和氛围图，为后续制作提供视觉参考。',
            software: ['Adobe Photoshop', 'Corel Painter', 'Procreate', 'Blender (辅助)', 'SketchUp (辅助)'],
            workflow: '是整个美术流程的最上游步骤，为后续所有美术资产的制作提供设计蓝图。影响3D建模、贴图/材质、UI设计等所有后续环节的美术风格和方向。'
        },
        'modeling': {
            title: '3D建模 (Modeling)',
            description: '将概念设计转化为可在游戏中使用的三维模型，包括高模雕刻和低模拓扑，并进行UV拆分。',
            software: ['Autodesk Maya', 'Blender', 'ZBrush', 'Mudbox', 'Topogun', 'RizomUV', 'Marmoset Toolbag', 'xNormal'],
            workflow: '依赖于概念设计提供的模型外观参考。完成的3D模型是后续贴图和材质绘制以及骨骼绑定的直接输入。'
        },
        'texturing': {
            title: '贴图和材质 (Texturing & Materials)',
            description: '为3D模型绘制颜色和各种细节贴图（如法线、金属度、粗糙度等），赋予模型表面质感。',
            software: ['Adobe Photoshop', 'Substance Painter', 'Substance Designer', '3D Coat', 'Mari', 'RealityCapture (辅助)', 'Marmoset Toolbag'],
            workflow: '依赖于已完成的3D模型及其UV展开。制作好的贴图和材质用于增强3D模型的视觉表现，并在引擎整合阶段应用到模型上。'
        },
        'rigging': {
            title: '骨骼绑定 (Rigging)',
            description: '为3D模型（尤其是角色）创建骨骼骨架和控制器，并进行权重绑定，使其能够被动画师进行动画控制。',
            software: ['Autodesk Maya', 'Blender', 'ZBrush (辅助)', 'AdvancedSkeleton (Maya插件)', 'mGear (Maya插件)', 'Rigify (Blender插件)', 'Mixamo', 'NVIDIA Skinning Tools (Maya插件)'],
            workflow: '依赖于已完成的3D模型。绑定是后续动画制作的直接输入。'
        },
        'animation': {
            title: '动画 (Animation)',
            description: '为绑定好的角色或物件制作各种动作，如行走、攻击、过场动画等。',
            software: ['Autodesk Maya', 'Blender', 'MotionBuilder', 'Spine (2D)', 'Live2D (2D)', 'Adobe Animate (2D/3D)'],
            workflow: '依赖于已完成骨骼绑定的模型。制作好的动画资源会在引擎整合阶段导入并配置到动画系统中。'
        },
        'vfx': {
            title: '特效 (VFX, Visual Effects)',
            description: '制作游戏中各种非实体的视觉效果，如粒子效果、材质特效、环境效果等。',
            software: ['Unity Engine (粒子系统)', 'Unreal Engine (Cascade/Niagara)', 'PopcornFX', 'Adobe After Effects', 'Photoshop', 'Houdini', 'EmberGen', 'Unity Shader Graph', 'Unreal Material Editor'],
            workflow: '部分特效素材制作可能依赖于概念设计。特效本身可以在任何阶段并行制作，但最终需要与模型、动画、场景一起在引擎中整合。'
        },
        'ui-design': {
            title: 'UI设计与动效 (UI Design & Animation)',
            description: '设计制作游戏菜单、HUD、图标等所有界面元素，并制作界面交互动效。',
            software: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Sketch', 'Adobe XD', 'Adobe After Effects', 'Principle', 'Unity Engine (UGUI, TextMesh Pro)', 'Unreal Engine (UMG)', 'Scaleform', 'Axure', 'TexturePacker'],
            workflow: '设计风格依赖于概念设计。UI动效制作可能依赖于特效。最终的UI元素和动效需要在引擎中进行组装和逻辑配置。'
        },
        'integration': {
            title: '引擎整合 (Integration into Engine)',
            description: '将所有美术资源（模型、贴图、动画、特效、UI等）导入游戏引擎，设置材质、配置动画系统、搭建场景、进行性能优化等。',
            software: ['Unity Engine', 'Unreal Engine', 'CryEngine', 'Godot', 'Git', 'Perforce', 'Unity Profiler', 'Unreal Profiling tools', 'RenderDoc', 'PIX', 'Xcode Instruments', 'Visual Studio', 'Shader compilers'],
            workflow: '是所有前期美术资产制作完成后的综合步骤。将各种独立的资产转化为实际可运行的游戏画面，并进行最终的性能优化和质量检查，是美术流程的收尾阶段，与程序和关卡设计紧密协作。'
        }
    };

    const details = processDetailsMap[processId];
    if (!details) return;

    const detailsContainer = document.getElementById('process-details-content');
    
    let softwareList = details.software.map(sw => `<li class="mb-1">${sw}</li>`).join('');
    
    detailsContainer.innerHTML = `
        <h3 class="text-xl font-bold text-gray-900 mb-3">${details.title}</h3>
        <div class="mb-4">
            <h4 class="font-semibold text-gray-800 mb-2">核心工作内容:</h4>
            <p class="text-gray-700">${details.description}</p>
        </div>
        <div class="mb-4">
            <h4 class="font-semibold text-gray-800 mb-2">主要使用的软件工具:</h4>
            <ul class="list-disc pl-5 text-gray-700">
                ${softwareList}
            </ul>
        </div>
        <div>
            <h4 class="font-semibold text-gray-800 mb-2">上下游关系:</h4>
            <p class="text-gray-700">${details.workflow}</p>
        </div>
    `;
}

// Handle window resize for leader lines
window.addEventListener('resize', () => {
    // Clear existing lines
    if (window.flowchartLines) {
        window.flowchartLines.forEach(line => line.remove());
        window.flowchartLines = [];
    }
    
    // Redraw lines after a short delay to allow DOM to settle
    setTimeout(() => {
        drawFlowchartConnections();
    }, 200);
});




